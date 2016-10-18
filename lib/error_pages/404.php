<?php
use unikent\kent_theme\KentThemeHelper;

	KentThemeHelper::header(
		array(
			'title' => 'Page not found',
			'beta_bar'=>false,
			'meta'=>array(
				'title' => '404 - Page not found - University of Kent',
				'description'=>'Sorry, we can’t find the page you’re looking for.'
			)
		)
	);
?>
<div class="card card-overlay header-card-overlay">
	<div class="card-body">
		<div class="card-media-wrap">
			<img class="card-img" src="<?php KentThemeHelper::getThemeWebRoot();?>assets/images/kent-labrynth-3x2.jpg">
		</div>
		<div class="card-img-overlay-centered card-img-overlay-tinted">
			<div class="text-xs-center">
				<h2 class="card-subtitle">Sorry, we can’t find the page you’re looking for.</h2>
				<?php if(!empty($message)){ ?><p class="card-text"><?php echo $message; ?></p><?php } ?>
			</div>
		</div>
		<div class="card-img-overlay-bottom card-img-overlay-link card-overlay-inline-sm card-overlay-inline-nopad">
			<form method="GET" action="<?php echo HOME_URL; ?>/search">
				<div class="form-group">
					<label for="search" class="sr-only">Search</label>
					<div class="input-group input-group-lg">
						<input type="search" class="form-control" id="search" name="q" placeholder="Search by course, department. keyword... " autocomplete="off" value="<?php if(isset($_GET['q'])) echo htmlentities($_GET['q']); ?>">
				<span class="input-group-btn">
					<button type="submit" class="btn btn-accent btn-icon kf-search" aria-label="Search"><span class="sr-only">Search</span></button>
				</span>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
<?php include 'partials/links_panel.php';
KentThemeHelper::footer();
?>

