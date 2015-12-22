<?php
namespace unikent\kent_theme;

Class KentThemeHelper {

	private static $theme_web_root = false;

	public static function header($config= array()){

		$defaults = array(
			'title' => 'Kent Theme Beta',
			'menu' => array(),
			'meta' => array(),
			'theme' => '',
			'head_markup' => '',
			'slim'=>false
		);

		$config = array_merge($defaults,$config);

		extract($config);

		$meta = array_merge(array('title'=>'Kent Theme Beta',
								'thumb'=>'https://static.kent.ac.uk/pantheon/static/logos/logo-1200-1200.gif'
								  ), $meta);

		// if menu is provided
		if(!empty($menu)){
			$menu_links = static::generateMenu($menu);
		}else{
			$menu_links = "";
		}
		// If theme is not default
		if(!empty($theme)){
			$theme_style = "main_{$theme}.css";
		}else{
			$theme_style = "main.css";
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

	public static function footer($foot_markup = ''){
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

		$current_url = $_SERVER["REQUEST_URI"];

		foreach($menu as $name => $link){

			if(parse_url($link,PHP_URL_PATH) == parse_url($current_url,PHP_URL_PATH)){
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
		echo static::$theme_web_root = str_replace( $base_folder ,'', $public_folder_path ).'/';
	}

	public static function getOriginalSiteLink()
	{
		$url = preg_replace("/^(beta)(.+)/i", "www$2", $_SERVER['HTTP_HOST']) . $_SERVER['REQUEST_URI'];
		return '//'.$url;
	}

}
