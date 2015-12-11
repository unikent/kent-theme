<?php 
	include dirname(dirname(__FILE__))."/lib/bootstrap.php";
	use \unikent\kent_theme\kentThemeHelper;

	KentThemeHelper::header("Kent Beta",
		array(
			'Home' => '#',
			'About' => '#',
			'Blog' => '#'
		),
		array(
			'title'=>'Kent Beta - Kent Theme Beta'
		)
	); 
?>
<div class="card card-overlay header-card-overlay">
	<div class="card-body">
		<div class="card-media-wrap">
			<img src="examples/images/engineering-student-16-9.jpg" class="card-img-bottom" alt="">
		</div>
		<div class="card-title-wrap card-title-wrap-link card-transparent">
				<h2 class="card-title">beta.kent.ac.uk</h2>
				<p class="card-text">Evolving Kent's online user experience</p>
			</div>	

	</div>
</div>

<div class='container'>
	<h1>Kent Beta</h1>
	<p>Over the past year, we've been exploring a new visual language and defining UX (user experience) principles to evolve Kent's online user experience.</p>
	<p>The beta.kent site is our test bed to start trying out some of these ideas.</p>

	<h4>Sites Available in the beta theme</h4>
	<ul>
		<li><a href='/news'>Kent News Centre</a></li>
	</ul>

</div>

<?php KentThemeHelper::footer(); ?>
