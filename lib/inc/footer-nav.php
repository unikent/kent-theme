<?php

$footer_config =  array(
	'middle'=> array(
		/*
		 * **************************************************************************************************************
		 * SOCIAL LINKS
		 * **************************************************************************************************************
		 */
		'social' => array(
			'facebook' => array(
				'title'=>'Connect with us on Facebook',
				'url' => "//www.facebook.com/UniversityofKent"
			),
			'twitter' => array(
				'title'=>'Follow us on Twitter',
				'url' => "//twitter.com/unikent"
			),
			'linkedin' => array(
				'title'=>'Connect with us on LinkedIn',
				'url' => "//www.linkedin.com/company/university-of-kent"
			),
			'youtube' => array(
				'title'=>'Subscribe to us on Youtube',
				'url' => "//www.youtube.com/user/UniversityofKent"
			),
		),
		'sections' => array(
			/*
			 * **************************************************************************************************************
			 * COLUMN 1
			 * **************************************************************************************************************
			 */
			array(
				array(
					'title' => 'About us',
					'links' => array(
						array(
							'title' => "About us",
							'url'	=> HOME_URL . "/about/"
						),
						array(
							'title' => "The UK's European university",
							'url'	=> HOME_URL . "/european/"
						),
						array(
							'title' => "Research",
							'url'	=> HOME_URL . "/research/"
						),
						array(
							'title' => "Governance and planning",
							'url'	=> HOME_URL . "/governance/"
						),
						array(
							'title' => "Modern Slavery Act Statement",
							'url'	=> HOME_URL . "/governance/modern-slavery-statement.html"
						),
						array(
							'title' => "Charity information",
							'url'	=> HOME_URL . "/governance/charity.html"
						),
						array(
							'title' => "Locations",
							'url'	=> HOME_URL . "/discover/locations/"
						),
						array(
							'title' => "Support us",
							'url'	=> HOME_URL . "/giving/"
						),
						array(
							'title' => "What's on",
							'url'	=> HOME_URL . "/events/"
						),
						array(
							'title' => "News",
							'url'	=> HOME_URL . "/news/"
						),
						array(
							'title' => "Business services",
							'url'	=> HOME_URL . "/discover/business-services/"
						),
						array(
							'title' => "Jobs",
							'url'	=> HOME_URL . "/jobs/"
						),
					)
				),
			),

			/*
			 * **************************************************************************************************************
			 * COLUMN 2
			 * **************************************************************************************************************
			 */
			array(
				array(
					'title' => 'Study',
					'links' => array(
						array(
							'title' => "Courses",
							'url'	=> HOME_URL . "/courses"
						),
						array(
							'title' => "Undergraduates",
							'url'	=> HOME_URL . "/courses/undergraduate"
						),
						array(
							'title' => "Postgraduates",
							'url'	=> HOME_URL . "/courses/postgraduate"
						),
						array(
							'title' => "International",
							'url'	=> HOME_URL . "/courses/international/"
						),
						array(
							'title' => "Part-time and short courses",
							'url'	=> HOME_URL . "/courses/part-time"
						),
						array(
							'title' => "Student experience",
							'url'	=> HOME_URL . "/courses/undergraduate/student-experience/"
						),
						array(
							'title' => "Accommodation",
							'url'	=> HOME_URL . "/accommodation"
						),
						array(
							'title' => "Fees and funding",
							'url'	=> HOME_URL . "/courses/undergraduate/fees-and-funding/"
						),
						array(
							'title' => "Scholarships",
							'url'	=> HOME_URL . "/scholarships/search/postgraduate/"
						),
						array(
							'title' => "Term dates",
							'url'	=> HOME_URL . "/academic/University-term-dates/Menutermdates.html"
						)
					)
				),
			),
			/*
			 * **************************************************************************************************************
			 * COLUMN 3
			 * **************************************************************************************************************
			 */
			array(
				array(
					'title' => "Information for",
					'links' => array(
						array(
							'title' => "Applicants",
							'url'	=> HOME_URL . "/applicants/"
						),
						array(
							'title' => "Parents and family",
							'url'	=> HOME_URL . "/parents/"
						),
						array(
							'title' => "Students",
							'url'	=> HOME_URL . "/student/"
						),
						array(
							'title' => "Staff",
							'url'	=> HOME_URL . "/campusonline/"
						),
						array(
							'title' => "Alumni",
							'url'	=> HOME_URL . "/alumni/"
						),
						array(
							'title' => "Business and partners",
							'url'	=> HOME_URL . "/discover/business-services/"
						)
					)
				)
			)
		)
	),
	/*
	 * **************************************************************************************************************
	 * BOTTOM LINKS
	 * **************************************************************************************************************
	 */
	'bottom' => array(
		array(
			'title' => "&copy; University of Kent",
			'url'	=> HOME_URL
		),
		array(
			'title' => "Accessibility",
			'url'	=> HOME_URL . "/accessibility/"
		),
		array(
			'title' => "Contact us",
			'url'	=> HOME_URL . "/contact/"
		),
		array(
			'title' => "Feedback",
			'url'	=> HOME_URL . "/feedback.html"
		),
		array(
			'title' => "Legal",
			'url'	=> HOME_URL . "/legal/"
		),
		array(
			'title' => "Cookies",
			'url'	=> HOME_URL . "/legal/cookies.html"
		)
	)
);