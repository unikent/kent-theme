<?php use unikent\kent_theme\KentThemeHelper; 

include "{bootstrap}";

?>
<!DOCTYPE html>
<html lang="en-GB">
	<head>

		<link rel="stylesheet" href="<?php KentThemeHelper::getThemeWebRoot();?>assets/css/main.css" />
		<link rel="stylesheet" href="<?php KentThemeHelper::getThemeWebRoot();?>assets/css/kentfont.css" />

		<script src="<?php KentThemeHelper::getThemeWebRoot();?>assets/js/modernizr.min.js"></script>
	</head>
	<body>
		<main id="main_content">
			{body}
		</main>
		<script src="<?php echo KentThemeHelper::getThemeWebRoot();?>assets/js/main.js"></script>
	</body>
</html>