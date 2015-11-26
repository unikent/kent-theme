<?php
/**
 * Bootstrap Theme helper
 *
 */

// get config
if(file_exists(dirname(__FILE__)."/config.php")){
	include dirname(__FILE__)."/config.php";
}else{
	// set any required defaults
}

include "theme-helper.php";