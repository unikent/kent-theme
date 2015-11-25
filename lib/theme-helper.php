<?php
namespace unikent\kent_theme;

Class KentThemeHelper {

	public static function header($page_title, $section_title, $section_menu_file = ''){
		include("inc/header.php");
	}

	public static function footer(){

		include("inc/footer.php");
	}

}
