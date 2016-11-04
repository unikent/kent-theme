<?php

// As terrible as this looks, this code is actually only used via the pattern library build scripts, meaning GET vars
// are provided solely from the grunt.js build file (which we hopefully trust completely)
foreach($_GET as $key => $value){
	define(strtoupper($key), $value);
}
include dirname(__DIR__).'/vendor/autoload.php';
include "../bootstrap.php";
