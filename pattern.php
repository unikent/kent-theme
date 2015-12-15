<?php
/**
 * Quick pattern library render
 *
 */


// Util to find files
function find_all_files($dir) 
{ 
    $root = scandir($dir); 
    foreach($root as $value) 
    { 
        if($value === '.' || $value === '..') {continue;} 
        if(is_file("$dir/$value")) {$result[]="$dir/$value";continue;} 
        foreach(find_all_files("$dir/$value") as $value) 
        { 
            $result[]=$value; 
        } 
    } 
    return $result; 
} 
// wrap pages in markup
function wrap_page($file){
	global $bootstrap_path;
	global $wrapper;

	$payload = file_get_contents($file);
	$wrapped = str_replace(array('{body}','{bootstrap}'), array($payload, $bootstrap_path ), $wrapper);
	// wrap / theme
	file_put_contents('public/'.str_replace('.html','.php',$file), $wrapped);

	return true;
}

// get need vars
$files = find_all_files('patterns');
$wrapper = file_get_contents('lib/pattern-wrappers/basic.php');
$bootstrap_path = dirname(__FILE__).'/lib/bootstrap.php';

// for each file found
foreach($files as $file){

	$fileInfo = pathinfo($file);
	// create folder if needed
	if (!file_exists('public/'.$fileInfo['dirname'])) {
        mkdir('public/'.$fileInfo['dirname'], 0777, true);
    }   

    // if its HTML, wrap it
	if($fileInfo['extension'] == 'html'){
		wrap_page($file);
		echo "Format {$file} \n";
	}else{
		//else just copy it
		copy($file, 'public/'.$file);
		echo "Copy {$file} \n";
	}
}

echo "Done! \n";