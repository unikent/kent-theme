<?php use unikent\kent_theme\KentThemeHelper; ?><!DOCTYPE html>
<html lang="en-GB">
	<head>
		<title><?php echo $page_title; ?></title>
		<link rel="stylesheet" href="<?php KentThemeHelper::getThemeWebRoot();?>/assets/css/<?php echo $theme_style;?>" />
		<link rel="stylesheet" href="<?php KentThemeHelper::getThemeWebRoot();?>/assets/css/kentfont.css" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

		<script src="<?php KentThemeHelper::getThemeWebRoot();?>/assets/js/modernizr.min.js"></script>
	</head>
	<body>
		<a href='#' class='sr-only'>Jump to section menu</a>
		<a href='#' class='sr-only'>Jump to content</a>
		<header class="global-header">
			<section class='audience-bar navbar'>
				<a class='navbar-brand kf-kent-horizontal' href=''><span class='sr-only'>The University of Kent</span></a>
				<span class='tag-line'>The UK's European University</span>

				<button class='kf pull-right menu-button'></button>
				<button class='kf-search pull-right search-button'></button>
			</section>
			<section class='global-nav' >

				<a class='main-logo kf-kent-block' href=''><span class='sr-only'>The University of Kent</span></a>
				<button class="search-button-full btn btn-accent btn-icon btn-lg pull-right"><span class='kf-fw kf-search'></span></button>
				<div class="global-nav-menu">
					<nav class="global-nav-links">
						<div class="global-nav-link">
							<a href="#">Research <span class='more kf-chevron-down'></span></a>
							<nav>
								<a href="#">
									Research impact
									<span class='global-nav-link-desc'>Making a difference locally and internationally</span>
									<span class='more kf-chevron-right'></span>
								</a>
								<a href="#">Research degrees<span class='global-nav-link-desc'>Cutting edge, research-informed programmes</span><span class='more kf-chevron-right'></span></a>
								<a href="#">Innovation &amp; enterprise <span class='global-nav-link-desc'>Strong, international network of partnerships and business connections</span><span class='more kf-chevron-right'></span></a>
								<a href="#">Academic excellence<span class='global-nav-link-desc'>Thriving, intellectual community of world-expert academics</span><span class='more kf-chevron-right'></span></a>
							</nav>
						</div>
						<div class="global-nav-link">
							<a href="#">Study <span class='more kf-chevron-down'></span></a>
							<nav>
								<a href="#">
									Inspiring teaching
									<span class='global-nav-link-desc'>Excellent teaching with individual attention</span>
									<span class='more kf-chevron-right'></span>
								</a>
								<a href="#">Undergraduate <span class='global-nav-link-desc'>Courses to prepare you for a successful future</span><span class='more kf-chevron-right'></span></a>
								<a href="#">Postgraduate <span class='global-nav-link-desc'>Programmes supported by a stimulating support culture</span><span class='more kf-chevron-right'></span></a>
								<a href="#">International <span class='global-nav-link-desc'>World-wide links in a supportive, cosmopolitan community</span><span class='more kf-chevron-right'></span></a>
							</nav>
						</div>
						<div class="global-nav-link">
							<a href="#">Explore <span class='more kf-chevron-down'></span></a>
							<nav>
								<a href="#">About <span class='global-nav-link-desc'>Top 16 UK University</span><span class='more kf-chevron-right'></span></a>
								<a href="#">Inspirint student experience <span class='global-nav-link-desc'>3rd for studen satisfaction</span><span class='more kf-chevron-right'></span></a>
								<a href="#">Superb locations <span class='global-nav-link-desc'>Close to London with European centres. Come visit us.</span><span class='more kf-chevron-right'></span></a>
								<a href="#">Accommodation and facilities<span class='global-nav-link-desc'>Living and learning on campus</span><span class='more kf-chevron-right'></span></a>
							</nav>
						</div>
					</nav>
					<nav class='audience-nav-links'>
						<a href='#' class=''>Student</a>
						<a href='#' class=''>Staff</a>
						<a href='#' class=''>Alumni</a>
						<a href='#' class=''>Departments</a>
					</nav>

				</div>
				<div class="global-nav-search">

					<form >
						<div class="form-group">
							<label for="search" class="sr-only">Search</label>
							<div class="input-group input-group-lg">
								<input type="search" class="form-control" id="search" placeholder="Search by course, department. keyword... ">
								<span class="input-group-btn">
									<button type="submit" class="btn btn-accent btn-icon"><span class='kf-fw kf-search'></span></button>
								</span>
							</div>
						</div>

						<span class='close-search pull-right'>Close search</span>
					</form>

				</div>


			</section>
			<section class="departmental-nav">
				<header><?php echo $section_title; ?></header>
				<div class='navbar-toggler'>Menu <span class="kf-chevron-down pull-right"></span></div>
				<nav class="navbar-menu">
					<?php echo $menu_links; ?>
				</nav>
			</section>
		</header>