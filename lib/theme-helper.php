<?php
namespace unikent\kent_theme;

Class KentThemeHelper {

	private static $theme_web_root = false;

	public static function header($page_title, $section_title, $section_menu_file = ''){
		include("inc/header.php");
	}

	public static function footer(){
		include("inc/footer.php");
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
