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
			'slim'=>true,
			'main_class'=>'content-page',
			'head_markup'=>'<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.10.0/codemirror.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.10.0/codemirror.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.10.0/mode/xml/xml.js"></script>'
		)
	); 
?>
	{{>breadcrumb}}
	<div class="content-header">
		<h1 class="">{{sub_title}}</h1>
	</div>
	<div class="content-container">
	{{{contents}}}
	<div>
	<br>
	<br>
<?php KentThemeHelper::footer('<script>jQuery(document).ready(function($){
	$(".pattern").each(function(index, elem){
		  $(elem).prepend(\'<div class="clearfix"><button class="codeshow btn btn-primary pull-right m-a-1">View Code</button></div><textarea class="codemirror">\' + $(elem).html() + \'</textarea>\');
		  CodeMirror.fromTextArea($(elem).find(".codemirror").get(0), {
		  mode:"xml",
		  readOnly:true
		  });
	});
	$(".CodeMirror").slideUp();
	$(".codeshow").click(function(){
		$(this).closest(".pattern").find(".CodeMirror").slideToggle();
	});
});
</script>'); ?>