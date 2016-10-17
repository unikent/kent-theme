<div class="page-feedback">
	<div class="container">
		<div class="row">
			<div class="page-feedback-toggle">
				<a class="<?php echo !empty($_POST['page_feedback_errors'])?'':'collapsed'; ?>" data-toggle="collapse" data-target="#page-feedback-content">Did you find this content helpful?</a>
			</div>
			<div class="page-feedback-meta">
				<?php echo $meta; ?>
			</div>
		</div>
	</div>
	<div id="page-feedback-content" class="collapse page-feedback-content<?php echo !empty($_POST['page_feedback_errors'])?' in':''; ?>">
		<div class="container">
			<h3>Did you find this content helpful? <i class="kf-close" data-toggle="collapse" data-target="#page-feedback-content"></i></h3>
			<p>We appreciate your feedback in helping us to improve our website.</p>
			<form id="page-feedback-form" class="form page-feedback-form" method="post">

				<div class="form-group">
					<label class="form-control-label" for="page-feedback-category">Your Feedback</label>
					<select id="page-feedback-category" name="page-feedback-category" class="custom-select form-control">
						<option>General comment</option>
						<option>Outdated or incorrect information</option>
						<option>Bug</option>
					</select>
				</div>

				<div class="form-group">
					<textarea id="page-feedback-comment" title="Feedback comment" rows="4" class="form-control" name="page-feedback-comment"></textarea>
				</div>

				<div class="form-group">
					<div class="g-recaptcha" data-sitekey="6LffLAkUAAAAAHqO0dFwjluf1bvYjlcvgQ533uhd"></div>
				</div>

				<div class="form-group">
					<button id="page-feedback-submit" value="page-feedback" type="submit" name="page-feedback-submit" class="btn btn-primary">Submit</button>
				</div>
				<?php if(!empty($_POST['page_feedback_errors'])){ ?>
				<div id="page_feedback_errors" class="alert alert-danger"><strong>Error</strong><br><?php echo $_POST['page_feedback_errors']; ?></div>
				<?php } ?>
			</form>
		</div>
	</div>
</div>