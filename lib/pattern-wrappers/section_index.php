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
			'main_class'=>'content-page'
		)
	); 
?>
{{>breadcrumb}}
<div class="content-header">
	<h1 class="">{{sub_title}}</h1>
</div>
<div class="content-container">

	{{{contents}}}

	<ul>
		{{#each navs.all}}
		{{#ifCond file.section '==' @root.section }}
		{{#each children}}
		{{> menu_item}}
		{{/each}}
		{{/ifCond}}
		{{/each}}
	</ul>

</div>
<br>
<br>
<?php KentThemeHelper::footer(); ?>