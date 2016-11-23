<?php
$global_nav_links = array(
	'Research' => array(
		array(
			'title' 		=>	'Making a difference',
			'description' 	=> 	'Discover how our research is helping communities around the world.',
			'url' 			=>	'/research'
		),
		array(
			'title' 		=>	'Research environment',
			'description' 	=> 	Explore the facilities, funding and communities that support our research.',
			'url' 			=>	'/research/environment'
		),
		array(
			'title' 		=>	'People',
			'description' 	=> 	'Meet some of the experts who are producing world-class research at Kent.',
			'url' 			=>	'/research/people'
		),
		array(
			'title' 		=>	'Innovation',
			'description' 	=> 	'Find out more about our business collaborations and commercial spin-outs.',
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
			'description' 	=> 	'Browse our public events: films, theatre, dance, art, lectures and festivals.',
			'url' 			=>	'/engage/whats-on'
		),
		array(
			'title' 		=>	'Our locations',
			'description' 	=> 	'Visit our locations in Canterbury, Medway and our four European centres.',
			'url' 			=>	'/engage/visit-us'
		),
		array(
			'title' 		=>	'Community',
			'description' 	=> 	'Discover how we work to connect with our local and regional communities.',
			'url' 			=>	'/engage/community'
		),
		array(
			'title' 		=>	'Business services',
			'description' 	=> 	'Our commercial services: everything from IT support to business collaborations.',
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
