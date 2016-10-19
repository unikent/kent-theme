<?php
$global_nav_links = array(
	'Research' => array(
		array(
			'title' 		=>	'Making a difference',
			'description' 	=> 	'Research impact in local and global communities',
			'url' 			=>	'//www.kent.ac.uk/research/impact'
		),
		array(
			'title' 		=>	'Enterprise projects',
			'description' 	=> 	'Creative partnerships with business and industry',
			'url' 			=>	'//www.kent.ac.uk/enterprise'
		),
		array(
			'title' 		=>	'Kent research staff',
			'description' 	=> 	'World-class experts producing innovative research',
			'url' 			=>	'//www.kent.ac.uk/research/expertise'
		),
		array(
			'title' 		=>	'Research funding',
			'description' 	=> 	'Funding opportunities for staff and students',
			'url' 			=>	'//www.kent.ac.uk/scholarships/postgraduate'
		)
	),
	'Study'=> array(
		array(
			'title' 		=>	'Top 20 university',
			'description' 	=> 	'Kent’s achievements and global reputation',
			'url' 			=>	'//www.kent.ac.uk/courses/why'
		),
		array(
			'title' 		=>	'Undergraduate',
			'description' 	=> 	'Our degrees gain the 5th highest score in the NSS',
			'url' 			=>	HOME_URL . "/courses/undergraduate"
		),
		array(
			'title' 		=>	'Postgraduate',
			'description' 	=> 	'Stimulating teaching and a dynamic community',
			'url' 			=>	HOME_URL . "/courses/postgraduate"
		),
		array(
			'title' 		=>	'International',
			'description' 	=> 	'Help and advice for international students',
			'url' 			=>	'//www.kent.ac.uk/internationalstudent'
		)
	),
	'Engage'=> array(
		array(
			'title' 		=>	'What’s on',
			'description' 	=> 	'Theatre, cinema, music, art, lectures and more',
			'url' 			=>	'//www.kent.ac.uk/events'
		),
		array(
			'title' 		=>	'Superb locations',
			'description' 	=> 	'Study in the UK or one of our European centres',
			'url' 			=>	'//www.kent.ac.uk/locations'
		),
		array(
			'title' 		=>	'Visiting Kent',
			'description' 	=> 	'Come to our Open Day or book an informal visit',
			'url' 			=>	'//www.kent.ac.uk/visit'
		),
		array(
			'title' 		=>	'Accommodation',
			'description' 	=> 	'Living at Kent – options to suit every budget',
			'url' 			=>	'//www.kent.ac.uk/accommodation'
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
