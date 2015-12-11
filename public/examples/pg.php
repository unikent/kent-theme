<?php
	include dirname(dirname(dirname(__FILE__)))."/lib/bootstrap.php";
	use \unikent\kent_theme\kentThemeHelper;

		KentThemeHelper::header(
			array(
				'title'=>"Postgraduate Courses",
				'menu' => array(
					'Home' => '#',
					'Apply' => '#'
				),
				'meta' => array(
					'description'=>'Postrgaduate home',
					'title'=>"Postgraduate Home - Kent Theme Beta"
				),
				'theme'=>'postgraduate'
			)
		);
?>
			<div class="card card-overlay header-card-overlay">
				<div class="card-body">
					<div class="card-media-wrap">
						<img src="images/engineering-student-16-9.jpg" class="card-img-bottom">
					</div>
					<div class="card-img-overlay">
						<form>
							<div class="form-group">
								<label for="search" class="sr-only">Search</label>
								<div class="input-group input-group-lg">
									<input type="search" class="form-control" id="cardCearch" placeholder="Search for postgraduate courses...">
									<span class="input-group-btn">
										<button type="submit" class="btn btn-accent btn-icon"><span class="kf-fw kf-search"></span></button>
									</span>
								</div>
							</div>
						</form>
					</div>

				</div>
			</div>

			<aside class="container">
				<p class="impact-statement">Our programmes are informed by a commitment to research excellence. We are ranked 17th in the UK for Research Intensity.</p>
			</aside>

			<div class="card card-overlay">
				<div class="card-x body card-inverse">
					<div class="card-title-wrap card-title-wrap-link pull-right">
						<h4 class="card-title">World Leading research</h4>
						<p class="card-text">Kent's excellent research performance positions us as one of UK's leading universities. Our 19 academic schools engage in research of international and world class standing.</p>
					</div>
					<div class="card-media-wrap card-media-wrap-video" data-toggle="modal" data-target="#myVideoModal">
						<img class="card-img-bottom" src="images/feature-professor-2-1.jpg">

						<div class="card-img-overlay text-right">
							<h5 class="card-subtitle">Prof. David Welch</h5>
							<p class="card-text">Professor of Modern History</p>
						</div>
					</div>


				</div>
				<div class="card-footer">
					<a href="#" class="chevron-link">Taught Programmes</a>
					<a href="#" class="chevron-link">Research Programmes</a>
					<a href="#" class="chevron-link">PHDs</a>
					<a href="#" class="chevron-link">Masters</a>
				</div>
			</div>

			<div class="card-panel">

				<div class="card-panel-body">
					<a class="card" href="#">
						<img class="card-img" src="images/promo-world.jpg">
						<h3 class="card-title">Global Opportunities</h3>
						<p class="card-text">Findo out how our programmes can help you launch your career and employability.</p>
					</a>
					<a class="card" href="#">
						<img class="card-img" src="images/promo-graduates.jpg">
						<h3 class="card-title">Scholarships &amp; Funding</h3>
						<p class="card-text">We have a renowned personal teaching style supported by our accessible and passionate academics.</p>
					</a>
					<a class="card" href="#">
						<img class="card-img" src="images/promo-3.jpg">
						<h3 class="card-title">How to apply</h3>
						<p class="card-text">We'll equip you with essential skills to give you a competitive advantage when it comes to your career.</p>
					</a>
					<a class="card" href="#">
						<img class="card-img" src="images/promo-innovation.jpg">
						<h3 class="card-title">Innovation and enterprise</h3>
						<p class="card-text">Find more about the exciting project we're working on with with partners and businesses.</p>
						</a>
				</div>
			</div>

			<blockquote>
				<img class="img-circle" src="images/profile-academic.jpg">
				<p>It's the academic community that creates a supportive enviroment to help you excel</p>
				<footer>
					<cite>
						Dr David Hume,
						<span>PhD. Particle physics</span>
						<span><a href="#" class="chevron-link">Learn more about our community</a></span>
					</cite>
				</footer>
			</blockquote>



<div class="card card-overlay">
				<div class="card-body card-inverse">
					<div class="card-title-wrap card-title-wrap-link">
						<h4 class="card-title">Life at Kent</h4>
						<p class="card-text">We have 6 exceptional Postgraduate locations with UK Campuses close to London and centres in Paris, Brussels Rome and Athens.</p>
					</div>
					<div class="card-media-wrap">
						<img src="images/promo-park-16-9.jpg" class="card-img-bottom" alt="Sport" />

						<a class="card-img-overlay text-right" href="#">
							<h5 class="card-subtitle">Canterbury</h5>
							<p class="card-text">Historical, friendly &amp; cosmopolitan.</p>
						</a>
					</div>
				</div>
				<div class="card-footer">
					<a href="#" class="chevron-link">The UK's European university</a>
					<a href="#" class="chevron-link">Campus life</a>
					<a href="#" class="chevron-link">Accommodation &amp; Facilities</a>
					<a href="#" class="chevron-link">Graduate school</a>
				</div>
			</div>


			<div class="card-panel">
				<div class="card-panel-body">
					<div class="card">
						<a href="#">
							<img class="card-img" src="images/promo-blog.jpg">
							<h3 class="card-title">Student Blogs</h3>
						</a>
						<p class="card-text">Our students tell it like it is.</p>
						<ul>
							<li><a href="#">John Rabbit</a></li>
							<li><a href="#">Felicity Hogg</a></li>
						</ul>
					</div>
					<a class="card short-text" href=''>
						<img class="card-img" src="images/promo-visit.jpg">
						<h3 class="card-title">Visit Us</h3>
						<p class="card-text">We're ranked one of the best universities for student satisfaction. Learn more why our students love Kent.</p>
					</a>
					<a class="card" href=''>
						<img class="card-img" src="images/international.jpg">
						<h3 class="card-title">International students</h3>
						<p class="card-text">From visa advice to arrival, we'll support you through the whole process.</p>
					</a>
					<a class="card" href=''>
						<img class="card-img" src="images/promo-4.jpg">
						<h3 class="card-title">Kent Union</h3>
						<p class="card-text">Get involved in the hundreds of societies on campus.</p>

					</a>
				</div>
			</div>

		</main>
		<?php KentThemeHelper::footer(); ?>
