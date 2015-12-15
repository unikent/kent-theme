<?php use unikent\kent_theme\KentThemeHelper; 

include "{bootstrap}";

KentThemeHelper::header(array(
			"title" => "Pattern library",
			'menu' => array(
				'Home' => '#',
			),
			'meta' => array(
					'title'=>'Pattern library'
			)
		)
	); 
?>

	{body}

<?php KentThemeHelper::footer(); ?>