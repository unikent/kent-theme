<?php use unikent\kent_theme\KentThemeHelper;
require 'footer-nav.php';
extract($footer_config);
?>
		</main>
		<footer id="footer" class="global-footer" role="region" aria-labelledby="footer_sr">
			<h2 id="footer_sr" class="sr-only">Page Footer</h2>
			<section class="global-footer-top">
				<div class="container">
					<div class="row">
						<div itemscope itemtype="http://schema.org/CollegeOrUniversity" class="col-md-6">
							<h4 class="footer-section-title collapsed" data-toggle="collapse_responsive" data-target="#footer-contact-us" aria-controls="footer-contact-us" aria-expanded="false" data-parent=".global-footer">Contact Us</h4>
							<div id="footer-contact-us" class="footer-section collapse-xs-down" role="complementary">
								<div class="row">
									<div itemscope="" class="col-sm-6">
										Recruitment and admissions:<br>
										<span class="sr-only">Email: </span><a itemprop="email" href="mailto:information@kent.ac.uk">information@kent.ac.uk</a><br>
										<span class="sr-only">Telephone: </span><a href="tel:+441227827272"><span itemprop="telephone">+44 1227 827272</span></a>
									</div>
									<div class="col-sm-6">
										<span class="sr-only">Address: </span>
										<span itemprop="name">University of Kent</span>,<br>
										<address itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
											<span itemprop="addressLocality">Canterbury</span>,<br>
											<span itemprop="addressRegion">Kent</span>,<br>
											<span itemprop="addressCountry">England</span>,<br>
											<span itemprop="postalCode">CT2 7NZ</span>
										</address>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<a class="chevron-link" href="//www.kent.ac.uk/contact/">All contacts</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<h4 class="footer-section-title collapsed" data-toggle="collapse_responsive" data-target="#footer-open-days" aria-controls="footer-open-days" aria-expanded="false"  data-parent=".global-footer">Open days</h4>
							<div id="footer-open-days" class="footer-section collapse-xs-down" role="complementary">
								<div class="row">
									<div class="col-sm-6">
										<strong>Canterbury</strong>
										<p>
										Sat 2 July 2016<br>
										Sat 8 October 2016<br>
										Sat 22 October 2016
										</p>
									</div>
									<div class="col-sm-6">
										<strong>Medway</strong>
										<p>
										Sat 18 June 2016<br>
										Tues 15 October 2016
										</p>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<a class="chevron-link" href="//www.kent.ac.uk/courses/visit/">All open days and visits</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="global-footer-middle">
				<div class="container">
					<div class="row">
						<?php
						foreach($middle['sections'] as $index => $column){
						?>
						<div class="col-md-3">
							<?php foreach ($column as $section){
								$slug = strtolower(preg_replace('/[^a-zA-Z-]*/','',str_replace(' ','-',$section['title'])));
							?>
							<h5 id="footer-<?php echo $slug; ?>-heading" class="footer-section-title collapsed" data-toggle="collapse_responsive" data-target="#footer-<?php echo $slug; ?>" aria-controls="footer-<?php echo $slug; ?>" aria-expanded="false" data-parent=".global-footer"><?php echo $section['title']; ?></h5>
							<nav id="footer-<?php echo $slug; ?>" class="footer-section footer-section-links collapse-sm-down" role="menu" aria-labelledby="footer-<?php echo $slug; ?>-heading">
								<?php foreach ($section['links'] as $link){
								?>
								<a role="menuitem" href="<?php echo $link['url']; ?>"><?php echo $link['title']; ?></a>
								<?php
								}
								?>
							</nav>
							<?php
							}
							?>
							<?php if($index == (count($middle['sections']) -1)){
							?>
							<nav id="footer-social" class="footer-section footer-section-social content-social" role="menu" aria-labelledby="footer-social-heading">
							<?php foreach ($middle['social'] as $network => $link){
								?>
								<a title="<?php echo $network; ?>" role="menuitem" href="<?php echo $link; ?>" class="kf-<?php echo $network; ?>"><span class="sr-only"><?php echo $link['title']; ?></span></a>
								<?php
							}
							?>
							</nav>
							<?php
							}
							?>
						</div>
						<?php
						}
						?>
				</div>
			</section>
			<section class="global-footer-bottom">
				<div class="container">
					<div class="row">
						<div class="col-xs-12">
							<h6 class="footer-section-title collapsed" data-toggle="collapse_responsive" data-target="#footer-affiliations" aria-controls="footer-affiliations" aria-expanded="false" data-parent=".global-footer">Affiliations</h6>
							<div id="footer-affiliations" class="footer-section collapse-sm-down" role="list">
								<a class="col-xs-6 col-sm-4 col-md-3 col-lg-2" role="listitem" href="//sgroup.be/"><img src="<?php KentThemeHelper::getThemeWebRoot();?>assets/images/logo-sgroup-white.png" class="img-fluid" alt="SGroup European Universities Network"></a>
								<a class="col-xs-6 col-sm-4 col-md-3 col-lg-2" role="listitem" href="//www.kent.ac.uk/about/partnerships/eastern-arc.html"><img src="<?php KentThemeHelper::getThemeWebRoot();?>assets/images/logo-arc-white.png" class="img-fluid" alt="Eastern Academic Research Consortium"></a>
								<a class="col-xs-6 col-sm-4 col-md-3 col-lg-2" role="listitem" href="//www.universitiesuk.ac.uk/"><img src="<?php KentThemeHelper::getThemeWebRoot();?>assets/images/logo-uniuk-white.png" class="img-fluid" alt="Univerities UK"></a>
								<a class="col-xs-6 col-sm-4 col-md-3 col-lg-2" role="listitem" href="//www.kent.ac.uk/about/awards/qap/"><img src="<?php KentThemeHelper::getThemeWebRoot();?>assets/images/logo-queen-white.png" class="img-fluid" alt="The Queen's Anniversary Prize"></a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="global-footer-base">
				<div class="container" role="menu">
					<?php
					foreach($bottom as $link){
					?>
						<a href="<?php echo $link['url']; ?>" role="menuitem"><?php echo $link['title']; ?></a>
					<?php
					}
					?>
				</div>
			</section>
		</footer>
		<script>
			window.KENT  = window.KENT || {};
			window.KENT.settings = <?php echo json_encode($js_config); ?>;
			window.KENT.kentbar = {
				config:{
					target:'#kentBar',
					render:false,
					components: [
						"student",
						"staff",
						"departments",
						"alumni"
					],
					styles:{
						kentfont:false,
						fonts:false,
						base:false
					}
				}
			};
		</script>
		<script src="<?php KentThemeHelper::getThemeWebRoot();?>assets/js/main<?php echo $minify; ?>.js"></script>
		<?php echo $foot_markup ;?>

		<!-- begin google analytics code -->
		<script>
			if (typeof disable_kent_theme_analytics === 'undefined' || !disable_kent_theme_analytics) {
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

				ga('create', 'UA-54179016-1', 'auto');
				ga('send', 'pageview');
				ga('require', 'displayfeatures');
				ga('require', 'linkid', 'linkid.js');
			}
		</script>
		<!-- end google analytics code -->


		<!-- Google Tag Manager -->
	<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TL3R5X"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-TL3R5X');</script>
	<!-- End Google Tag Manager -->

	</body>
</html>
