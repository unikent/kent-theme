<?php use unikent\kent_theme\KentThemeHelper; 

include "{bootstrap}";

		KentThemeHelper::header("Pattern library", array(
		'test'=>'test'	
		),array('title'=>'Pattern library')); ?>

	{body}

<?php KentThemeHelper::footer(); ?>