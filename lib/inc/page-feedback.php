<div class="page-feedback">
	<div class="container">
		<div class="row">
			<div class="page-feedback-toggle">
				<a class="collapsed" data-toggle="collapse" data-target="#page-feedback-content">Did you find this content helpful?</a>
			</div>
			<div class="page-feedback-meta">
				<?php echo $meta; ?>
			</div>
		</div>
	</div>
	<div id="page-feedback-content" class="collapse page-feedback-content">
		<div class="container">
			<h3>Did you find this content helpful? <i class="kf-close" data-toggle="collapse" data-target="#page-feedback-content"></i></h3>
			<p>We appreciate your feedback in helping us to improve our website.</p>
			<form id="page-feedback-form" class="form page-feedback-form">
				<div class="form-group">
					<label for="page-feedback-category">Your Feedback</label>
					<select id="page-feedback-category" name="page-feedback-category" class="c-select form-control">
						<option>General comment</option>
						<option>Outdated or incorrect information</option>
						<option>Bug</option>
					</select>
				</div>
				<div class="form-group">
					<textarea title="Feedback comment" class="form-control"></textarea>
				</div>
				<div class="form-group">
					<button id="page-feedback-submit" type="submit" name="page-feedback-submit" class="btn btn-primary">Submit</button>
				</div>
			</form>
		</div>
	</div>
</div>