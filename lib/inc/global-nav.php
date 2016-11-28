<?php
$global_nav_links = array(
	'Research' => array(
		array(
			'title' 		=>	'Making a difference',
			'description' 	=> 	'How our research contributes to positive change and innovation.',
			'url' 			=>	'/research'
		),
		array(
			'title' 		=>	'Environment',
			'description' 	=> 	'Supporting research: our facilities, funding and partnerships.',
			'url' 			=>	'/research/research-environment'
		),
		array(
			'title' 		=>	'People',
			'description' 	=> 	'Meet some of the experts who are producing world-class research.',
			'url' 			=>	'/research/people'
		),
		array(
			'title' 		=>	'Innovation',
			'description' 	=> 	'Capitalising on research: our commitment to enterprise.',
			'url' 			=>	'/research/innovation'
		)
	),
	'Study'=> array(
		array(
			'title' 		=>	'Top-ranking university',
			'description' 	=> 	'Independent surveys confirm our position as a top UK university.',
			'url' 			=>	'/courses/top-ranking'
		),
		array(
			'title' 		=>	'Undergraduate',
			'description' 	=> 	'Degrees that offer inspirational teaching and great prospects.',
			'url' 			=>	"/courses/undergraduate"
		),
		array(
			'title' 		=>	'Postgraduate',
			'description' 	=> 	'Masters and PhDs within in a world-leading research environment.',
			'url' 			=>	"/courses/postgraduate"
		),
		array(
			'title' 		=>	'International',
			'description' 	=> 	'Discover our welcoming community for international students.',
			'url' 			=>	'/courses/international'
		)
	),
	'Engage'=> array(
		array(
			'title' 		=>	'What’s on',
			'description' 	=> 	'Public events: films, theatre, dance, art, lectures, sport and festivals.',
			'url' 			=>	'/engage/whats-on'
		),
		array(
			'title' 		=>	'Our locations',
			'description' 	=> 	'A guide to Canterbury, Medway and our four European centres.',
			'url' 			=>	'/engage/visit-us'
		),
		array(
			'title' 		=>	'Community',
			'description' 	=> 	'Our work to connect with local and regional communities.',
			'url' 			=>	'/engage/community'
		),
		array(
			'title' 		=>	'Business services',
			'description' 	=> 	'How our expertise and facilities can support your business.',
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
