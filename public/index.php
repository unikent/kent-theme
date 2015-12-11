<?php
include dirname(dirname(__FILE__))."/lib/bootstrap.php";
use \unikent\kent_theme\kentThemeHelper;

KentThemeHelper::header(array(
	"title" => "Beta",
	'menu' => array(
		'Home' => '#',
		'About' => '#',
		'Blog' => '//blogs.kent.ac.uk/webdev/category/beta/#'
		),
	'meta' => array(
		'description' => 'Beta home',
		'title' => "Kent Beta - Kent Theme Beta"
		)
	)
);
?>
<div class="card card-overlay header-card-overlay">
	<div class="card-body">
		<div class="card-media-wrap">
			<img src="examples/images/sunrise-16-9.jpg" class="card-img-bottom" alt="">
		</div>
		<a href="//blogs.kent.ac.uk/webdev/category/beta/" class="card-title-wrap card-title-wrap-link card-transparent">
			<h2 class="card-title">We're testing out new designs</h2>
			<p class="card-text">Find out more about our beta, a site for experimenting and getting feedback</p>
		</a>
	</div><!-- /.card-body -->
</div><!-- /.card -->

<div class="card-panel card-panel-primary-tint recent-news">
	<div class="card-panel-header">
		<h2 class="card-panel-title">Updates</h2>
	</div>

	<?php
	// TODO: Don't like doing this in the view, are we going to move to a controller?
	$api = new unikent\kent_theme\KentApi;
	// get webdev blog posts with this tag
	$posts = $api->getPostsByTag('beta-kent');
	?>
	<div class="card-panel-body">
		<?php
		for ($i = 0; $i < min(4, count($posts)); ++$i):
			$post = $posts[$i];
			$thumbnail = $post->getImage('post-thumbnail');
		?>
		<a href="<?php echo $post->getPermalink() ?>" class="card">
			<img
			class="card-img"
			src="<?php echo $thumbnail['url'] ?>"
			alt="<?php echo $thumbnail['alt'] ?>"
			title="<?php echo $thumbnail['title'] ?>"
			>
			<h3 class="card-title"><?php echo $post->getTitle() ?></h3>
			<p><?php echo $post->getDate() ?></p>
		</a>
		<?php endfor; ?>
	</div><!-- /.card-panel-body -->
</div><!-- /.card-panel -->

<div class='container'>
	<h2>New Content</h2>
	<ul>
		<li><a href='/news'>News centre</a></li>
	</ul>

	<h4>Planned</h4>
	<ul>
		<li>Homepage (early 2016)</li>
		<li>Course details pages (early 2016)</li>
	</ul>
</div><!-- /.container -->

<?php KentThemeHelper::footer(); ?>
