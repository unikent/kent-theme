<?php use unikent\kent_theme\KentThemeHelper; ?>
<!DOCTYPE html>
<html lang="en-GB" class="no-js">
	<head>
		<title><?php echo $page_title; ?></title>

		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
		<meta name="robots" content="noindex" />

		<meta name="application-name" content="University of Kent"/>

		<link rel="apple-touch-icon" sizes="57x57" href="/assets/images/favicons/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/assets/images/favicons/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/assets/images/favicons/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/assets/images/favicons/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/assets/images/favicons/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/assets/images/favicons/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/assets/images/favicons/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/assets/images/favicons/apple-touch-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon-180x180.png">
		<link rel="icon" type="image/png" href="/assets/images/favicons/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="/assets/images/favicons/favicon-194x194.png" sizes="194x194">
		<link rel="icon" type="image/png" href="/assets/images/favicons/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="/assets/images/favicons/android-chrome-192x192.png" sizes="192x192">
		<link rel="icon" type="image/png" href="/assets/images/favicons/favicon-16x16.png" sizes="16x16">
		<link rel="manifest" href="/assets/images/favicons/manifest.json">
		<link rel="mask-icon" href="/assets/images/favicons/safari-pinned-tab.svg" color="#003882">
		<link rel="shortcut icon" href="/assets/images/favicons/favicon.ico">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="/assets/images/favicons/mstile-144x144.png">
		<meta name="msapplication-config" content="/assets/images/favicons/browserconfig.xml">
		<meta name="theme-color" content="#05345c">


		<?php foreach($meta as $name => $content){  ?>
			<meta name="<?php echo $name; ?>" content="<?php echo $content; ?>" />
		<?php } ?>

		<!-- Schema.org markup for Google+ -->
		<meta itemprop="name" content="<?php echo $page_title; ?>" />
		<meta itemprop="image" content="<?php echo $thumb; ?>" />
		<?php if($description){ ?><meta itemprop="description" content="<?php echo $description; ?>" /><?php } ?>

		<!-- Twitter Card data -->
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@unikent" />
		<meta name="twitter:title" content="<?php echo $page_title; ?>" />
		<meta name="twitter:creator" content="@unikent" />
		<meta name="twitter:image:src" content="<?php echo $thumb; ?>" />
		<?php if($description){ ?><meta name="twitter:description" content="<?php echo $description; ?>" /><?php } ?>

		<!-- Open Graph data -->
		<meta property="og:title" content="<?php echo $page_title; ?>" />
		<meta property="og:type" content="website" />
		<meta property="og:image" content="<?php echo $thumb; ?>" />
		<meta property="og:site_name" content="The University of Kent" />
		<?php if($description){ ?><meta property="og:description" content="<?php echo $description; ?>" /><?php } ?>

		<link rel="stylesheet" href="<?php KentThemeHelper::getThemeWebRoot();?>assets/css/<?php echo $theme_style;?>" />
		<link rel="stylesheet" href="<?php KentThemeHelper::getThemeWebRoot();?>assets/css/kentfont.css" />


		<script src="https://cdn.optimizely.com/js/6368495248.js"></script>
		<script src="<?php KentThemeHelper::getThemeWebRoot();?>assets/js/modernizr.min.js"></script>

		<?php
		// Only embed on on live env
		if(defined("ENV") && ENV == 'live'){ ?>
			<!-- Hotjar Tracking Code for http://kent.ac.uk -->
			<script>
				(function(h,o,t,j,a,r){
					h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
					h._hjSettings={hjid:235141,hjsv:5};
					a=o.getElementsByTagName('head')[0];
					r=o.createElement('script');r.async=1;
					r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
					a.appendChild(r);
				})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
			</script>
		<?php } ?>

		<?php echo $head_markup ;?>
	</head>
	<body class="<?php echo !empty($home_page) ? ' global-header-transparent"' :'' ; ?><?php echo ($slim)?' slim-header':''; ?>">
		<?php if(!$home_page){ ?>
		<a href="#section_menu" class="sr-only">Jump to section menu</a>
		<?php } ?>
		<a href="#main_content" class="sr-only">Jump to content</a>
		<?php if($beta_bar){ ?>
		<section id="beta-bar" class="beta-bar navbar" role="banner">
			<p><span class="beta-bar-beta">BETA</span></p>

			<p>We're testing <a href="https://blogs.kent.ac.uk/webdev/2015/12/04/beta-kent/">a new design</a>.</p>
			<p>It may not be complete or work as intended.</p>
			<p class="p-x-1">
				<a href="<?php echo KentThemeHelper::getOriginalSiteLink();?>" class="">Go to original site</a>
			</p>
			<p>
				<a class="btn btn-secondary feedback" href="https://insights.hotjar.com/s?siteId=235141&surveyId=11292">Give us feedback</a>
			</p>
			<button class="beta-toggler" aria-expanded="true" aria-controls="beta-bar" aria-label="Hide the Beta bar" title="Hide the Beta bar"></button>
		</section>
		<?php } ?>
		<header class="global-header" role="navigation">
			<section id="kentBar" class="audience-bar navbar" role="menubar">
				<a class="navbar-brand kf-kent-horizontal" href="<?php echo HOME_URL; ?>" title="The University of Kent" ><span class="sr-only">The University of Kent</span></a><span class="tag-line">The UK's European university</span><button class="menu-button" aria-controls="global-nav-menu" aria-expanded="false"><span class="sr-only">Open main menu</span></button><button class="search-button" aria-controls="global-nav-search" aria-expanded="false"><span class="sr-only">Open search</span></button><button class="audience-menu kf-user"><span class="sr-only">Open audience menu</span></button><nav class="audience-nav-links" role="menu">
					<a href="#" data-action="student" role="menuitem">Student</a>
					<a href="#" data-action="staff" role="menuitem">Staff</a>
					<a href="//www.kent.ac.uk/alumni/" role="menuitem">Alumni</a>
					<a href="#" data-action="departments" role="menuitem">Departments</a>
				</nav>
			</section>
			<section class="global-nav">
				<?php if($beta_bar){ ?>
					<button class="beta-toggler" aria-expanded="true" aria-controls="beta-bar" title="Show/hide the Beta bar">BETA</button>
				<?php } ?>
				<a class="main-logo kf-kent-block" href="<?php echo HOME_URL; ?>"><span class="sr-only">The University of Kent</span></a>

				<button class="search-button-full btn btn-accent btn-icon kf-search btn-lg pull-right" aria-controls="global-nav-search" aria-expanded="false"><span class="sr-only">Open search</span></button>

				<div class="global-nav-menu" id="global-nav-menu" role="menubar">
					<?php include 'global-nav.php'; ?>
					<nav class="audience-nav-links" role="menu">
						<a href="#" data-action="student" role="menuitem">Student</a>
						<a href="#" data-action="staff" role="menuitem">Staff</a>
						<a href="//www.kent.ac.uk/alumni/" role="menuitem">Alumni</a>
						<a href="#" data-action="departments" role="menuitem">Departments</a>
					</nav>
				</div>
				<div class="global-nav-search" id="global-nav-search">

					<form role="search" method="get" action="/search/">
						<div class="form-group">
							<label for="search" class="sr-only">Search</label>
							<div class="input-group input-group-lg">
								<input type="search" class="form-control" id="search" name="q" placeholder="Search by course, department. keyword... " autocomplete="off" value="<?php if(isset($_GET['q'])) echo htmlentities($_GET['q']); ?>">
								<span class="input-group-btn">
									<button type="submit" class="btn btn-accent btn-icon kf-search" aria-label="Search"><span class="sr-only">Search</span></button>
								</span>
							</div>
						</div>

						<span class="close-search pull-right" role="button">Close search</span>
					</form>
				</div>
			</section>
			<?php if(!$home_page){ ?>
				<?php if($section_nav){ ?>
				<section class="departmental-nav<?php echo ($slim)?' slim':''; ?>" id="section_menu">
					<header><?php if(isset($title_link) && !empty($title_link)) { ?><a href="<?php echo $title_link; ?>"><?php } ?><?php echo $title; ?><?php if(isset($title_link) && !empty($title_link)) { ?></a><?php } ?></header>
					<?php if(!empty($menu_links)): ?>
						<div class="navbar-toggler" aria-controls="navbar-menu" aria-expanded="false" role="button"><span>Menu</span></div>
						<nav class="navbar-menu" id="navbar-menu" role="menu">
							<?php echo $menu_links; ?>
						</nav>
					<?php endif; ?>
				</section>
				<?php } ?>
			<?php }else{
			?>
				<section class="home-nav" id="home_nav">
					<?php include 'global-nav.php'; ?>
				</section>
			<?php
			} ?>
		</header>

		<main id="main_content" class="<?php echo !empty($main_class) ? $main_class :'' ; ?>" role="main">
		<?php if($home_page){ ?>
		<h1 class="sr-only">The University of Kent</h1>
		<?php } ?>
