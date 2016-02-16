<?php use unikent\kent_theme\KentThemeHelper;

if(isset($_GET['webroot'])){
	define('WEBROOT',$_GET['webroot']);
}

include "../bootstrap.php";

KentThemeHelper::header(array(
			"title" => "{{{title}}}",
			'menu' => 'placeholder',
			'meta' => array(
					'title'=>'{{{title}}}'
			),
			'beta_bar'=>false,
			'slim'=>false,
			'main_class'=>'content-page'
		)
	); 
?>
	<br>
	<br>
	<div class="container">
	{{>home_nav}}
	<div>
<br>
<br>
<?php KentThemeHelper::footer(); ?>