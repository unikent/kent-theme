<?php use unikent\kent_theme\KentThemeHelper;

include dirname(dirname(__FILE__)) . "/pattern_bootstrap.php";

KentThemeHelper::header(array(
			"title" => "{{{title}}}",
			"title_link" => HOME_URL . "/patterns",
			'menu' => 'placeholder',
			'meta' => array(
					'title'=>'{{{title}}}'
			),
			'beta_bar'=>false,
			'slim'=>true,
			'brand_header'=>true,
			'main_class'=>'content-page'
		)
	); 
?>

	<div class="content-header">
		{{>breadcrumb}}
		<h1 class="">{{sub_title}}</h1>
	</div>
	<div class="content-container">
		<div class="content-main">
		{{#if lead }}<p class="lead">{{lead}}</p>{{/if}}
		{{>page_nav}}
		</div>
		{{>subnav}}
	</div>

	{{{contents}}}

<?php KentThemeHelper::footer(); ?>