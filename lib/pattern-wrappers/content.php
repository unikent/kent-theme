<?php use unikent\kent_theme\KentThemeHelper;

include dirname(dirname(__FILE__)) . "/pattern_bootstrap.php";

KentThemeHelper::header(array(
			"title" => "{{{title}}}",
			'menu' => 'placeholder',
			'meta' => array(
					'title'=>'{{{title}}}'
			),
			'beta_bar'=>false,
			'slim'=>true,
			'main_class'=>'content-page'
		)
	); 
?>
	{{>breadcrumb}}
	<div class="content-header">
		<h1 class="">{{sub_title}}</h1>
	</div>
	<div class="content-container">

		{{>subnav}}

		<p class="lead">{{lead}}</p>

		{{>page_nav}}
	</div>

		{{{contents}}}

		<br>
		<br>
<?php KentThemeHelper::footer(); ?>