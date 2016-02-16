<?php
/**
 * Bootstrap Theme helper
 *
 */

// get config
if(file_exists(dirname(dirname(__FILE__)."/.env"))){
	$envfile = file_get_contents(dirname(dirname(__FILE__))."/.env");
	$lines = explode("\n", str_replace("\r\n","\n",$envfile));

	foreach($lines as $line){
		$parts = explode('=',$line);
		if(count($parts)===2){
			defined($parts[0])?:define($parts[0],$parts[1]);
		}
	}
}

include "theme-helper.php";