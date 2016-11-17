<?php
$global_nav_links = array(
	'Research' => array(
		array(
			'title' 		=>	'Making a difference',
			'description' 	=> 	'Research impact in local and global communities.',
			'url' 			=>	'/research'
		),
		array(
			'title' 		=>	'Research environment',
			'description' 	=> 	'What it\'s like to research at Kent.',
			'url' 			=>	'/research/environment'
		),
		array(
			'title' 		=>	'People',
			'description' 	=> 	'World-class experts producing innovative research.',
			'url' 			=>	'/research/people'
		),
		array(
			'title' 		=>	'Innovation',
			'description' 	=> 	'New research projects.',
			'url' 			=>	'/research/innovation'
		)
	),
	'Study'=> array(
		array(
			'title' 		=>	'Top-ranking university',
			'description' 	=> 	'Kent’s achievements and global reputation.',
			'url' 			=>	'/courses/top-ranking'
		),
		array(
			'title' 		=>	'Undergraduate',
			'description' 	=> 	'Our degrees gain the 5th highest score in the NSS.',
			'url' 			=>	"/courses/undergraduate"
		),
		array(
			'title' 		=>	'Postgraduate',
			'description' 	=> 	'Stimulating teaching and a dynamic community.',
			'url' 			=>	"/courses/postgraduate"
		),
		array(
			'title' 		=>	'International',
			'description' 	=> 	'Help and advice for international students.',
			'url' 			=>	'/courses/international'
		)
	),
	'Engage'=> array(
		array(
			'title' 		=>	'What’s on',
			'description' 	=> 	'Theatre, cinema, music, art, lectures and more.',
			'url' 			=>	'/engage/whats-on'
		),
		array(
			'title' 		=>	'Visit us',
			'description' 	=> 	'Study in the UK or one of our European centres.',
			'url' 			=>	'/engage/visit-us'
		),
		array(
			'title' 		=>	'Community',
			'description' 	=> 	'Find out about our engagement with our communities and the wider world.',
			'url' 			=>	'/engage/community'
		),
		array(
			'title' 		=>	'Business services',
			'description' 	=> 	'Creative partnerships with business and industry.',
			'url' 			=>	'/engage/business-services'
		)
	)
);
?>
<nav class="global-nav-links" role="menu">
	<?php foreach($global_nav_links as $key => $links){ ?>
		<div class="global-nav-link">
			<a aria-controls="menu-<?php echo strtolower($key); ?>" aria-expanded="false" role="menuitem"><?php echo $key; ?></a>
			<div class="global-nav-link-submenu">
				<nav id="menu-<?php echo strtolower($key); ?>" role="menu">
					<?php foreach($links as $link){ ?>
						<div class="nav-link">
							<a role="menuitem" href="<?php echo $link['url']; ?>" class="global-nav-link-title"><?php echo $link['title']; ?></a>
							<span class="global-nav-link-desc"><?php echo $link['description']; ?></span>
							<a href="<?php echo $link['url']; ?>" class="faux-link-overlay" aria-hidden="true"><?php echo $link['title']; ?></a>
						</div>
					<?php } ?>
				</nav>
			</div>
		</div>
	<?php  } ?>
</nav>
