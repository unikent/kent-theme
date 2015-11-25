<?php
namespace unikent\kent_theme;

Class KentThemeHelper {

	private static $theme_web_root = false;

	public static function header($page_title, $section_title, $section_menu = '', $theme = ''){

		if(!empty($section_menu)){
			$menu_links = static::generate_menu($section_menu);
		}
		if(!empty($theme)){
			$theme_style = "main_{$theme}.css";
		}else{
			$theme_style = "main.css";
		}

		

		include("inc/header.php");
	}

	public static function footer(){
		include("inc/footer.php");
	}

	protected static function generate_menu($menu){
		$output = "";	

		$current_url = $_SERVER["PHP_SELF"];

		foreach($menu as $name => $link){

			if($link == $current_url){
				$output .= "<a class='active' href=\"{$link}\">{$name}</a>".PHP_EOL;
			}else{
				$output .= "<a href=\"{$link}\">{$name}</a>".PHP_EOL;
			}
			
		}
		return $output;
	}

	protected static function getThemeWebRoot(){

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
		echo static::$theme_web_root = str_replace( $base_folder ,'', $public_folder_path );
	}

}
