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


<!-- hero with search and links -->
			<div class="card card-overlay header-card-overlay">
				<div class="card-body">
					<div class="card-media-wrap">
						<!-- <img src="images/engineering-student-16-9.jpg" class="card-img-bottom"> -->
						<img src="images/dolphin.jpg" class="card-img-bottom" style="opacity:1.0">
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
					<a href="#" class="chevron-link" style="color:#fff;font-size:1.2rem;"><strong>Taught Programmes</strong></a>
					<a href="#" class="chevron-link" style="color:#fff;font-size:1.2rem;"><strong>Research Programmes</strong></a>
					<a href="#" class="chevron-link" style="color:#fff;font-size:1.2rem;"><strong>PHDs</strong></a>
					<a href="#" class="chevron-link" style="color:#fff;font-size:1.2rem;"><strong>Masters</strong></a>
				</div>

			</div>









<!-- key info icons -->

			<div class="card-panel" style="padding: 50px 0;margin: -100px 0 100px 0; background-color:#fff;">
			

				<div class="card-panel-body">

					<a class="card" href="#" style="text-align:center">
						<!-- <img class="card-img" src="images/promo-graduates.jpg"> -->
						<!-- <h1><i class="fa fa-gbp" style="margin-bottom:20px;font-size:4rem;"></i></h1> -->
						<h3 class="card-title" style="font-size:1.5rem;">Scholarships and funding</h3>
						<p class="card-text">All you need to know about postgraduate fees, financial assistance, and scholarships.</p>
					</a>

					
					<a class="card" href="#" style="text-align:center">
						<!-- <img class="card-img" src="images/promo-4.jpg"> -->
						<!-- <h1><i class="fa fa-home" style="margin-bottom:20px;font-size:4rem;"></i></h1> -->
						<h3 class="card-title" style="font-size:1.5rem;">Postgraduate accommodation</h3>
						<p class="card-text">Getting somewhere to live - whether it's for you, or your family too.</p>
						</a>

					<a class="card" href="#" style="text-align:center">
						<!-- <img class="card-img" src="images/promo-3.jpg"> -->
						<!-- <h1><i class="fa fa-info" style="margin-bottom:20px;font-size:4rem;"></i></h1> -->
						<h3 class="card-title" style="font-size:1.5rem;">Postgraduate support</h3>
						<p class="card-text">Support schemes, skills awards, training... We help make your time at Kent as productive as possible.</p>
					</a>


					<a class="card" href="#" style="text-align:center">
						<!-- <img class="card-img" src="images/promo-world.jpg"> -->
						<!-- <h1><i class="fa fa-globe" style="margin-bottom:20px;font-size:4rem;"></i></h1> -->
						<h3 class="card-title" style="font-size:1.5rem;">Global opportunities</h3>
						<p class="card-text">Paris, Brussels, Rome, Athens. Kent University offers unique opportunities for study and travel outside the UK.</p>
					</a>
				</div>

			</div>




<!-- Think Kent video section -->

			<div class="card card-overlay" style="margin-bottom:0;padding-bottom:0;">
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

			<div class="card-panel" style="background-color:#f7f2e1;">
			<!-- <div class="card-panel"> -->
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




<!-- twitter message -->

<blockquote class="social-quote social-quote-twitter" style="margin-top: 100px;margin-bottom: 100px;">
	<a href="https://twitter.com/UniKent/status/677103869265108992">
		<button></button>
		<p>Are you thinking about a #PhD? Check out the £9m scholarship fund @UniKent</p>
	</a>
	<cite>
		<a href="https://twitter.com/UniKent">@UniKent</a>
	</cite>
</blockquote>







<!-- postgrad life video loop -->
			<div class="card card-overlay" style="margin-bottom:0;padding-bottom:0;">
				<div class="card-body card-inverse">
					<div class="card-title-wrap card-title-wrap-link pull-right">
						<h4 class="card-title">Postgraduate life</h4>
						<p class="card-text">What's life and study like as a postgraduate at Kent?</p>
					</div>
					<div class="card-media-wrap" style="height:590px;">
						<div class="card-embed-wrap embed-responsive embed-responsive-16by9">
							<video autoplay="" loop="" class="embed-responsive-item" style="top:-95px;">
								<source src="video/pg4.mp4">
							</video>
						</div>
					</div>
					<!-- <div class="card-img-overlay">
						<h5 class="card-subtitle">Research Intensity</h5>
						<p class="card-text">This content is shorter.</p>
					</div> -->
				</div>


				<!-- <div class="card-footer" style="position:relative;bottom:80px;border-top:none;">
					<a href="#" class="chevron-link" style="color:#fff"><strong>International students</strong></a>
					<a href="#" class="chevron-link" style="color:#fff"><strong>Postgraduate study at Kent</strong></a>
					<a href="#" class="chevron-link" style="color:#fff"><strong>Visit us</strong></a>
					<a href="#" class="chevron-link" style="color:#fff"><strong>Student Blogs</strong></a>
				</div> -->


			</div>
<!-- postgrad life related content -->
			<div class="card-panel" style="background-color:#fff;position:relative;top:-70px;">
				<div class="card-panel-body" style="max-width:100%;">
					<div class="card">
						<a href="#">
							<img class="card-img" src="images/pg-life1.jpg">
							<h3 class="card-title">Postgraduate student blogs&nbsp;&nbsp;<!-- <i class="fa fa-chevron-right"></i> --></h3>
						</a>
						<p class="card-text">Our students tell it like it is.</p>
					</div>
					<a class="card short-text" href=''>
						<img class="card-img" src="images/pg-life4.jpg">
						<h3 class="card-title">Visit us&nbsp;&nbsp;<!-- <i class="fa fa-chevron-right"></i> --></h3>
						<p class="card-text">Find out how you can book a visit to one of our campuses.</p>
					</a>
					<a class="card" href=''>
						<img class="card-img" src="images/pg-life2.jpg">
						<h3 class="card-title">International students&nbsp;&nbsp;<!-- <i class="fa fa-chevron-right"></i> --></h3>
						<p class="card-text">From visa advice to arrival, we'll support you through the whole process.</p>
					</a>
					<a class="card" href=''>
						
						<img class="card-img" src="images/pg-life3.jpg">
						<h3 class="card-title">Postgraduate study at Kent&nbsp;&nbsp;<!-- <i class="fa fa-chevron-right"></i> --></h3>
						<p class="card-text">What's it like to study here as a postgraduate student?</p>

					</a>
				</div>
			</div>


<!-- scholarships icon panel -->
			
			<div class="card-panel" style="padding: 0px 0;margin: 100px 0 100px 0; background-color:#f7f2e1;">
			

				<div class="">

				

<img src="images/canterbury2.jpg" class="card-img-bottom" alt="Sport" style="width:800px;overflow:hidden;float:left;margin: 0" />

					<div style="float:right;margin-right:0px;width:500px;padding:50px 50px 50px 0;">	
						<h1 style="color:#671115">Superb locations</h1>
						<p>Kent offers inspirational study locations, and in addition students can choose to study abroad as part of their degree.</p>

<p>No matter on which campus you are based, you can access all our resources on all of our campuses and centres. The University runs an intercampus bus service, making it easy for you to enjoy the facilities at both Canterbury and Medway</p>

<a href="#">Read more about our campuses <i class="fa fa-chevron-right"></i></a>
					</div>

				</div>

			</div>



						<div class="card-panel" style="padding: 0px 0;margin: 100px 0 100px 0; background-color:#f7f2e1;">
			

				<div class="">

				

<img src="images/canterbury2.jpg" class="card-img-bottom" alt="Sport" style="width:100%;" />

					<div style="width:500px;padding:50px 50px 50px 50px;position:absolute;top:4900px;right:100px;z-index:99999;background-color:#f7f2e1;opacity:0.9">	
						<h1 style="color:#671115">Superb locations</h1>
						<p>Kent offers inspirational study locations, and in addition students can choose to study abroad as part of their degree.</p>

<p>No matter on which campus you are based, you can access all our resources on all of our campuses and centres. The University runs an intercampus bus service, making it easy for you to enjoy the facilities at both Canterbury and Medway</p>

<a href="#">Read more about our campuses <i class="fa fa-chevron-right"></i></a>
					</div>

				</div>

			</div>




<!-- 			<div class="card-panel" style="padding: 100px 0 0 0;margin: 100px 0 100px 0; background-color:#f7f2e1; height:400px;">
			

				<div class="">

					<div style="float:left;margin-left:200px;width:500px;">	
						<h3 class="">Medway</h3>
						<p class="" style="padding:0 100px 0 0">All you need to know about postgraduate accommodation.</p>
					</div>

					<h1><i class="fa fa-home" style="float:right;margin: 0 200px 20px 200px;font-size:9rem;"></i></h1>

				</div>

			</div> -->






<!-- locations -->

<!-- 			<div class="card card-overlay" style="margin-top:150px;">
				<div class="card-body card-inverse">
					<div class="card-title-wrap card-title-wrap-link">
						<h4 class="card-title">Global opportunities</h4>
						<p class="card-text">We have 6 exceptional Postgraduate locations with UK Campuses close to London and centres in Paris, Brussels Rome and Athens.</p>
					</div>
					<div class="card-media-wrap">
						<img src="images/canterbury2.jpg" class="card-img-bottom" alt="Sport" />

						<video autoplay="" loop="" class="embed-responsive-item" style="position:relative;top:-350px;">
								<source src="video/pg4.mp4">
							</video>

						
					</div>
				</div>
				
			</div>





 -->





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
