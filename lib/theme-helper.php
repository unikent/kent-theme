<?php
namespace unikent\kent_theme;

use unikent\Footprints\Ticket;

Class KentThemeHelper {

	private static $theme_web_root = false;

	public static function header($config = array()){

		$defaults = array(
			'title' => 'University of Kent',
			'menu' => '',
			'meta' => array(),
			'theme' => '',
			'head_markup' => '',
			'slim'=> true,
			'beta_bar'=>true,
			'home_page' => false,
			'section_nav' =>true
		);

		$config = array_merge($defaults, $config);

		extract($config);


		$minify = defined("DEBUG") && ("true" == DEBUG) ? "" : ".min";


		$meta = array_merge(array('title'=>$title,
								'thumb'=>'https://static.kent.ac.uk/pantheon/static/logos/logo-1200-1200.gif'
								  ), $meta);

		if($menu==='placeholder'){
			$menu_links = "{{> menu}}".PHP_EOL;
		}else {
			// if menu is provided
			if(is_array($menu) && !empty($menu)) {
				$menu_links = static::generateMenu($menu);
			} else {
				$menu_links = "";
			}
		}
		// If theme is not default
		if(!empty($theme)){
			$theme_style = "main_{$theme}{$minify}.css";
		}else{
			$theme_style = "main{$minify}.css";
		}

		// is there a description? pull it out if so
		$description = false;
		$page_title = '';

		if(isset($meta['description'])){
			$description = $meta['description'];
			// don't unset as we still want the actual description too
		}

		$thumb = $meta['thumb'];
		unset($meta['thumb']);

		if(isset($meta['title'])){
			$page_title = $meta['title'];
		}

		include("inc/header.php");
	}

	public static function footer($foot_markup = '', $additional_js_config = array()){

		$minify = defined("DEBUG") && ("true" == DEBUG) ? "" : ".min";
		// Config to be output in JS
		$js_config = array(
			"home_url" => HOME_URL,
			"api_url" => API_URL,
			"debug" => defined("DEBUG") ? ("true" == DEBUG) : false
		);
		$js_config = array_merge($js_config, $additional_js_config);

		include("inc/footer.php");
	}

	public static function breadcrumb($breadcrumb = array(), $config= array()){
		include 'inc/breadcrumb.php';
	}

	public static function pageFeedback($meta = ''){
		include 'inc/page-feedback.php';
	}


	protected static function generateMenu($menu){
		$output = "";
		// pre processed menu?
		if(isset($menu[0]) && is_array($menu[0])){
			foreach($menu as $link ){
				if($link['active']){
					$output .= "<a role=\"menuitem\" class=\"active\" href=\"{$link['href']}\">{$link['name']}</a>".PHP_EOL;
				}else{
					$output .= "<a role=\"menuitem\" href=\"{$link['href']}\">{$link['name']}</a>".PHP_EOL;
				}
			}
			return $output;
		}

		// None processed menu
		$current_url = $_SERVER["REQUEST_URI"];
		foreach($menu as $name => $link){
			if((parse_url($link,PHP_URL_PATH) == parse_url($current_url,PHP_URL_PATH) ) && ($link !=="#")){
				$output .= "<a role=\"menuitem\" class=\"active\" href=\"{$link}\">{$name}</a>".PHP_EOL;
			}else{
				$output .= "<a role=\"menuitem\" href=\"{$link}\">{$name}</a>".PHP_EOL;
			}
			
		}
		return $output;
	}

	public static function getThemeWebRoot(){
		// If constant was provided
		if(defined("WEBROOT")){
			echo WEBROOT;
			return WEBROOT;
		}
		// else try and figure it out ourselves
		if(static::$theme_web_root){
			echo static::$theme_web_root;
			return;
		} 

		// get folder path minus web url
		$base_folder = str_replace( $_SERVER['PHP_SELF'], '' , $_SERVER['SCRIPT_FILENAME']);
		// get public folder (full path)
		$public_folder_path = dirname(dirname(__FILE__)).'\public';

		// normalise
		$base_folder = str_replace(array('\\', '/'), '/', $base_folder);
		$public_folder_path = str_replace(array('\\', '/'),'/', $public_folder_path);
		
		// remove base folder from public folder to get releative webpath
		$root = static::$theme_web_root = str_replace( $base_folder ,'', $public_folder_path ).'/';
		$root .= (substr($root, -1) == '/' ? '' : '/');
		echo $root;
	}

	public static function getOriginalSiteLink()
	{
		$url = preg_replace("/^(beta)(.+)/i", "www$2", $_SERVER['HTTP_HOST']) . $_SERVER['REQUEST_URI'];
		return '//'.$url;
	}


	public static function _404($message = ''){
		header("HTTP/1.0 404 Not Found");
		include 'error_pages/404.php';
		die();
	}

	public static function _401($message = ''){
		header("HTTP/1.1 401 Unauthorized");
		include 'error_pages/401.php';
		die();
	}

	public static function _403($message = ''){
		header('HTTP/1.1 403 Forbidden');
		include 'error_pages/403.php';
		die();
	}

	public static function _500($message = '', $debug=''){
		header("HTTP/1.0 500 Internal Server Error");
		include 'error_pages/500.php';
		die();
	}
}

if(isset($_ENV['RECAPTCHA']) && !defined('RECAPTCHA')){
	define('RECAPTCHA', $_ENV['RECAPTCHA']);
}

if(defined('RECAPTCHA') && isset($_POST['page-feedback-submit']) && $_POST['page-feedback-submit'] == 'page-feedback'){

	$recaptcha = new \ReCaptcha\ReCaptcha(RECAPTCHA);
	$resp = $recaptcha->verify($_POST['g-recaptcha-response'], (isset($_SERVER['HTTP_X_KENT_REAL_IP'])?$_SERVER['HTTP_X_KENT_REAL_IP']:$_SERVER['REMOTE_ADDR']));
	if ($resp->isSuccess()) {

		try {
			$ticket = new Ticket("Website Feedback - " . $_POST['page-feedback-category']);
			$ticket->set_emails(false, false, false);
			$ticket->set_priority("Normal");
			$ticket->set_category("Web");
			$ticket->add_assignee('Web Development');
			$ticket->add_entry($_POST['page-feedback-comment']);
			$ticket = $ticket->create();
			$_POST['page_feedback_success'] = true;
		}catch(\Exception $e){
			$_POST['page_feedback_errors'] = (defined('DEBUG') && DEBUG) ? "Footprints ticket submission failed: <" . $e->getMessage() :"Submission Failed";
		}

	} else {

		if(defined('DEBUG') && DEBUG ){
			$_POST['page_feedback_errors'] = "<ul>";
			foreach ($resp->getErrorCodes() as $code) {
				$_POST['page_feedback_errors'] .= '<li>' . $code . '</li>';
			}
			$_POST['page_feedback_errors'] .="</ul>";
		}else{
			$_POST['page_feedback_errors'] = "Submission Failed";
		}

	}

}
