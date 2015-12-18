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

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha256-3dkvEK0WLHRJ7/Csr0BZjAWxERc5WH7bdeUya2aXxdU= sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==" crossorigin="anonymous">

			<div class="card card-overlay header-card-overlay">
				<div class="card-body">
					<div class="card-media-wrap">
						<!-- <img src="images/engineering-student-16-9.jpg" class="card-img-bottom"> -->
						<img src="images/dolphin.jpg" class="card-img-bottom">
						<!-- <video autoplay="" loop="" class="embed-responsive-item" style="top:295px;">
								<source src="video/pg1.mp4">
							</video> -->
					</div>
					<div class="card-img-overlay" style="position:relative;bottom:320px;">
						<form>
							<div class="form-group">
								<label for="search" class="sr-only">Search</label>
								<div class="input-group input-group-lg">
									<input type="search" class="form-control" id="cardCearch" placeholder="Search postgraduate programmes and supervisors">
									<span class="input-group-btn">
										<button type="submit" class="btn btn-accent btn-icon"><span class="kf-fw kf-search"></span></button>
									</span>
								</div>
							</div>
						</form>
					</div>

				</div>


				<div class="card-footer" style="position:relative;bottom:200px;border-top:none;">
					<a href="#" class="chevron-link" style="color:#fff"><strong>Taught Programmes</strong></a>
					<a href="#" class="chevron-link" style="color:#fff"><strong>Research Programmes</strong></a>
					<a href="#" class="chevron-link" style="color:#fff"><strong>PHDs</strong></a>
					<a href="#" class="chevron-link" style="color:#fff"><strong>Masters</strong></a>
				</div>

			</div>











<!--
<div class="card-panel" style="padding: 50px 0;margin: 50px 0 50px 0; background-color:#f5f5f5;">
			

				<div class="card-panel-body">

					<a class="card" href="#">
						<h3 class="card-title">Scholarships &amp; Funding</h3>
						<p class="card-text">We have a renowned personal teaching style supported by our accessible and passionate academics.</p>
					</a>

					
					<a class="card" href="#">
						<h3 class="card-title">Accommodation</h3>
						<p class="card-text">Find out about where to live as a postgraduate.</p>
						</a>

						<a class="card" href="#">
						<h3 class="card-title">Postgraduate Support</h3>
						<p class="card-text">Help with finding out about funding, postgraduate services, research.</p>
					</a>


						<a class="card" href="#">
						<h3 class="card-title">Global Opportunities</h3>
						<p class="card-text">Find out how our programmes can help you launch your career and employability.</p>
					</a>
				</div>

</div>
-->


<div class="card-panel" style="padding: 50px 0;margin: -100px 0 100px 0; background-color:#fff;">
			

				<div class="card-panel-body">

					<a class="card" href="#" style="text-align:center">
						<!-- <img class="card-img" src="images/promo-graduates.jpg"> -->
						<h1><i class="fa fa-gbp" style="margin-bottom:20px;font-size:4rem;"></i></h1>
						<h3 class="card-title">Scholarships &amp; funding</h3>
						<p class="card-text">All you need to know about postgraduate fees, financial assistance, and scholarships.</p>
					</a>

					
					<a class="card" href="#" style="text-align:center">
						<!-- <img class="card-img" src="images/promo-4.jpg"> -->
						<h1><i class="fa fa-home" style="margin-bottom:20px;font-size:4rem;"></i></h1>
						<h3 class="card-title">Accommodation</h3>
						<p class="card-text">Find out what you need to know about getting somewhere to live - whether it's for you, or your family too.</p>
						</a>

					<a class="card" href="#" style="text-align:center">
						<!-- <img class="card-img" src="images/promo-3.jpg"> -->
						<h1><i class="fa fa-info" style="margin-bottom:20px;font-size:4rem;"></i></h1>
						<h3 class="card-title">Postgraduate support</h3>
						<p class="card-text">Support schemes, skills awards, training... We offer many services to help make your time at Kent as productive as possible.</p>
					</a>


					<a class="card" href="#" style="text-align:center">
						<!-- <img class="card-img" src="images/promo-world.jpg"> -->
						<h1><i class="fa fa-globe" style="margin-bottom:20px;font-size:4rem;"></i></h1>
						<h3 class="card-title">Global opportunities</h3>
						<p class="card-text">Paris, Brussels, Rome, Athens. Kent University offers unique opportunities for study and travel outside the UK.</p>
					</a>
				</div>

</div>




<!-- 
<div class="card-panel" style="padding: 50px 0;margin: 50px 0 50px 0; background-color:#f5f5f5;">
			

				<div class="card-panel-body">

					<div class="card" href="#">
						<h3 class="card-title">Scholarships &amp; Funding</h3>
						<p class="card-text">
						<ul>
							<li><a href="#">Postgraduate tuition fees</a></li>
							<li><a href="#">Scholarships</a></li>
							<li><a href="#">Financial assistance</a></li>
							<li><a href="#">International awards</a></li>
							<li><a href="#">External awards</a></li>
						</ul>
						</p>
					</div>
					
					<div class="card" href="#">
						<h3 class="card-title">Accommodation</h3>
						<p class="card-text">
						<ul>
							<li><a href="#">Housing advice for postgraduates</a></li>
							<li><a href="#">Accommodation for you and your family</a></li>
							<li><a href="#">Canterbury accommodation</a></li>
							<li><a href="#">Medway accommodation</a></li>
							<li><a href="#">Accommodation at our other campuses</a></li>
						</ul>
						</p>
					</div>


					<div class="card" href="#">
						<h3 class="card-title">Support</h3>
						<p class="card-text">
						<ul>
							<li><a href="#">Postgraduate Support Scheme 2015</a></li>
							<li><a href="#">Research support</a></li>
							<li><a href="#">Global Skills Award Programme</a></li>
							<li><a href="#">Training</a></li>
						</ul>
						</p>
					</div>


					<div class="card" href="#">
						<h3 class="card-title">Global opportunities</h3>
						<p class="card-text">
						<ul>
							<li><a href="#">Studying in Europe</a></li>
						</ul>
						</p>
					</div>
				</div>

</div>
 -->



<div class="card card-overlay">
				<div class="card-body card-inverse">
					<div class="card-title-wrap card-title-wrap-link pull-right">
						<h4 class="card-title">A video loop</h4>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
					<div class="card-media-wrap" style="height:590px;">
						<div class="card-embed-wrap embed-responsive embed-responsive-16by9">
							<video autoplay="" loop="" class="embed-responsive-item" style="top:-95px;">
								<source src="video/pg1.mp4">
							</video>
						</div>
					</div>
					<div class="card-img-overlay">
						<h5 class="card-subtitle">Research Intensity</h5>
						<p class="card-text">This content is shorter.</p>
					</div>
				</div>
			</div>


<div class="card card-overlay">
				<div class="card-body card-inverse">
					<div class="card-title-wrap card-title-wrap-link pull-right">
						<h4 class="card-title">A video loop</h4>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
					<div class="card-media-wrap" style="height:590px;">
						<div class="card-embed-wrap embed-responsive embed-responsive-16by9">
							<video autoplay="" loop="" class="embed-responsive-item" style="top:-95px;">
								<source src="video/pg2.mp4">
							</video>
						</div>
					</div>
					<div class="card-img-overlay">
						<h5 class="card-subtitle">Research Intensity</h5>
						<p class="card-text">This content is shorter.</p>
					</div>
				</div>
			</div>


			<div class="card card-overlay">
				<div class="card-x body card-inverse">
					<div class="card-title-wrap card-title-wrap-link pull-right">
						<h4 class="card-title">Think Kent</h4>
						<p class="card-text">International thinkers. Global impact.</p>
					</div>
					<div class="card-media-wrap card-media-wrap-video" data-toggle="modal" data-target="#myVideoModal">
						<iframe width="1400" height="700" src="https://www.youtube.com/embed/H4tcJUQ1USw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

						<div class="card-img-overlay text-xs-right">
							<h5 class="card-subtitle">Dr Stephen Lowry</h5>
							<p class="card-text">Senior Lecturer in Astronomy and Astrophysics</p>
							<p class="card-text">Rosetta mission: Imaging comet 67P/Churyumov–Gerasimenko</p>
						</div>
					</div>


				</div>
				
			</div>

			

			<!-- <div class="card-panel" style="background-color:#05345c;color:#fff;"> -->
			<div class="card-panel">
				<div class="card-panel-body" style="max-width:100%;">
					<div class="card">
						<iframe width="290" height="163" src="https://www.youtube.com/embed/xWTBCsLmsOg?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
						<h3 class="card-title">Dr Heejung Chung</h3>
						<p class="card-text">Flexible working: The way of the future?</p>
					</div>
					<div class="card">
						<iframe width="290" height="163" src="https://www.youtube.com/embed/TuH4fQ8Lqkw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
						<h3 class="card-title">Professor Mark Connelly</h3>
						<p class="card-text">Not so silent nights: The 1914 Christmas Truce</p>
					</div>
					<div class="card">
						<iframe width="290" height="163" src="https://www.youtube.com/embed/oxQAWEZ0smQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
						<h3 class="card-title">Dr Peter Klappa</h3>
						<p class="card-text">I teach – you learn: Framing excellence in teaching</p>
					</div>
					<div class="card">
						<iframe width="290" height="163" src="https://www.youtube.com/embed/cPgu6GBBiVg?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
						<h3 class="card-title">Professor Ruth Blakeley</h3>
						<p class="card-text">War on Terror: Mapping the CIA's Rendition, Detention & Torture programme</p>
					</div>
				</div>
			</div>




<!-- <div class="card card-overlay">
				<div class="card-x body card-inverse">
					<div class="card-title-wrap card-title-wrap-link pull-right">
						<h4 class="card-title">Think Kent</h4>
						<p class="card-text">International thinkers. Global impact.</p>
					</div>
					<div class="card-media-wrap card-media-wrap-video" data-toggle="modal" data-target="#myVideoModal">
						<iframe width="1400" height="700" src="https://www.youtube.com/embed/xWTBCsLmsOg?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

						<div class="card-img-overlay text-right">
							<h5 class="card-subtitle">DR HEEJUNG CHUNG</h5>
							<p class="card-text">Senior Lecturer in Sociology and Social Policy</p>
							<p class="card-text">Flexible working: The way of the future?</p>
						</div>
					</div>


				</div>
				
			</div> -->


<aside class="container">


				<div style="text-align:center;">
			<a href="#"><h1><i class="kf-twitter"></i></h1></a>
			</div>
			</aside>

			<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Are you thinking about a <a href="https://twitter.com/hashtag/PhD?src=hash">#PhD</a>? Check out the £9m scholarship fund <a href="https://twitter.com/UniKent">@UniKent</a> <a href="https://t.co/mz01I3SL8z">https://t.co/mz01I3SL8z</a> <a href="https://t.co/iio6jE6Xv5">https://t.co/iio6jE6Xv5</a></p>&mdash; University of Kent (@UniKent) <a href="https://twitter.com/UniKent/status/677103869265108992">December 16, 2015</a></blockquote>





			<!-- <aside class="container" style="margin-bottom:100px;">
				<p class="impact-statement">Our programmes are informed by a commitment to research excellence. We are ranked 17th in the UK for Research Intensity.</p>

				<div style="text-align:center;">
			<a href="#"><h1><i class="kf-twitter"></i></h1></a>
			</div>
			</aside>
 -->



			<!-- <div class="card-panel">

				<div class="card-panel-body">
					<a class="card" href="#">
						<img class="card-img" src="images/promo-world.jpg">
						<h3 class="card-title">Global Opportunities</h3>
						<p class="card-text">Find out how our programmes can help you launch your career and employability.</p>
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
						<img class="card-img" src="images/promo-4.jpg">
						<h3 class="card-title">Innovation and enterprise</h3>
						<p class="card-text">Find more about the exciting project we're working on with with partners and businesses.</p>
						</a>
				</div>
			</div>
 -->
	

<!-- 
			<div class="card-panel" style="padding: 50px 0;margin: 0 0 150px 0; background-color:#f5f5f5;">
				
				<div class="card-panel-body">
					<a class="card" href="#">
						
						<h3 class="card-title">Global Opportunities</h3>
						<p class="card-text">Find out how our programmes can help you launch your career and employability.</p>
					</a>
					<a class="card" href="#">
						<h3 class="card-title">Scholarships &amp; Funding</h3>
						<p class="card-text">We have a renowned personal teaching style supported by our accessible and passionate academics.</p>
					</a>
					<a class="card" href="#">

						<h3 class="card-title">How to apply</h3>
						<p class="card-text">We'll equip you with essential skills to give you a competitive advantage when it comes to your career.</p>
					</a>
					<a class="card" href="#">
						<h3 class="card-title">Innovation and enterprise</h3>
						<p class="card-text">Find more about the exciting project we're working on with with partners and businesses.</p>
						</a>
				</div>
			</div>
 -->




<div class="card card-overlay">
				<div class="card-body card-inverse">
					<div class="card-title-wrap card-title-wrap-link">
						<h4 class="card-title">Superb locations</h4>
						<p class="card-text">We have 6 exceptional Postgraduate locations with UK Campuses close to London and centres in Paris, Brussels Rome and Athens.</p>
					</div>
					<div class="card-media-wrap">
						<img src="images/canterbury2.jpg" class="card-img-bottom" alt="Sport" />

						<a class="card-img-overlay text-xs-right" href="#">
							<h5 class="card-subtitle">Canterbury</h5>
							<p class="card-text">Historical, friendly &amp; cosmopolitan.</p>
						</a>
					</div>
				</div>
				
			</div>

<!-- 
					<blockquote>
				<img class="img-circle" src="images/profile-academic.jpg">
				<p>It's the academic community that creates a supportive environment to help you excel</p>
				<footer>
					<cite>
						Dr David Hume,
						<span>PhD. Particle physics</span>
						<span><a href="#" class="chevron-link">Learn more about our community</a></span>
					</cite>
				</footer>
			</blockquote> -->








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
						<iframe width="291" height="194" src="https://www.youtube.com/embed/otW4h8pGGXY?showinfo=0" frameborder="0" allowfullscreen></iframe>
						<h3 class="card-title">Postgraduate study at Kent</h3>
						<p class="card-text">What's it like to study here as a postgraduate student?</p>

					</a>
				</div>
			</div>





		</main>

		<div class="modal fade modal-fullscreen" id="myVideoModal" tabindex="-1" role="dialog" aria-labelledby="myVideoModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content modal-content-transparent">
					<div class="modal-header">
						<button type="button" class="close pull-right" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true"><i class="kf-close"></i></span>
							<span class="sr-only">Close</span>
						</button>
					</div>

					<div class="embed-responsive embed-responsive-16by9">
						<video controls="" class="embed-responsive-item">
							<source src="video/research2.mp4">
						</video>
						<div class="embed-responsive-item-overlay">
							<span class="video-transcript"><small><a href="#">Download transcript</a></small></span>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<?php KentThemeHelper::footer(); ?>
