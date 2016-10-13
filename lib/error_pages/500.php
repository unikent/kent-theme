<?php
use unikent\kent_theme\KentThemeHelper;

	KentThemeHelper::header(
		array(
			'title' => 'Website error',
			'beta_bar'=>false,
			'meta'=>array(
				'title' => '500 - Website error - University of Kent',
				'description'=>"Sorry, something's gone wrong."
			)
		)
	);
?>
<div class="card card-overlay header-card-overlay">
	<div class="card-body">
		<div class="card-media-wrap">
			<img class="card-img" src="/media/images/wires-3x2.jpg">
		</div>
		<div class="card-img-overlay-centered card-img-overlay-tinted">
			<div class="text-xs-center">
				<h2 class="card-subtitle">Sorry, something's gone wrong.</h2>
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
<?php if(defined('DEBUG') && DEBUG){
?>
	<div class="container p-t-3">
		<div class="alert alert-danger">
			<strong>Debug output:</strong>
			<br>
			<pre><?php echo $debug; ?></pre>
		</div>
	</div>
<?php
}?>
<?php include 'partials/links_panel.php';
KentThemeHelper::footer();
?>

