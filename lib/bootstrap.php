<?php
/**
 * Bootstrap Theme helper
 *
 */

// get config
if(file_exists("config.php")){
	include "config.php";
}else{
	// set any required defaults
}

include "theme-helper.php";