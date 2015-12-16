<?php
	include dirname(dirname(dirname(__FILE__)))."/lib/bootstrap.php";
	use \unikent\kent_theme\kentThemeHelper;

		KentThemeHelper::header(
			array(
				'title' => "Kent Theme Demo",
				'menu' => array(
					'Home' => '#',
					'Culture' => '#',
					'Environment' => '#',
					'Science' => '#',
					'Society' => '#',
					'Kent Life' => '#'
				),
				'meta' => array('title'=>'Demo Page - Kent Theme Beta')
			)
		);
?>

			<div class="card card-overlay header-card-overlay">
				<div class="card-body">
					<div class="card-media-wrap">
						<img class="card-img-bottom" src="images/hero-painting-16-9.jpg">
					</div>
					<div class="card-title-wrap card-title-wrap-link card-transparent">
						<h2 class="card-title">A leading research institution</h2>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>

				</div>
			</div>


			<section class="container">
				<h1>Heading 1</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tellus sit amet neque iaculis, at pulvinar lectus mattis. Pellentesque hendrerit risus euismod lobortis auctor. Morbi condimentum dolor mauris, at finibus eros tincidunt id.</p>

				<h2>Heading 2</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tellus sit amet neque iaculis, at pulvinar lectus mattis. Pellentesque hendrerit risus euismod lobortis auctor. Morbi condimentum dolor mauris, at finibus eros tincidunt id.</p>

				<h3>Heading 3</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tellus sit amet neque iaculis, at pulvinar lectus mattis. Pellentesque hendrerit risus euismod lobortis auctor. Morbi condimentum dolor mauris, at finibus eros tincidunt id.</p>

				<h4>Heading 4</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tellus sit amet neque iaculis, at pulvinar lectus mattis. Pellentesque hendrerit risus euismod lobortis auctor. Morbi condimentum dolor mauris, at finibus eros tincidunt id.</p>

				<h5>Heading 5</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tellus sit amet neque iaculis, at pulvinar lectus mattis. Pellentesque hendrerit risus euismod lobortis auctor. Morbi condimentum dolor mauris, at finibus eros tincidunt id.</p>

				<h6>Heading 6</h6>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et massa nec mauris convallis ullamcorper ut vel arcu. Nullam lectus tortor, luctus id turpis at, rutrum tempor felis. Morbi velit mi, ornare sed fermentum at, congue vel ante. Proin eu neque feugiat, vulputate ante ac, facilisis turpis. Aenean at interdum lacus, et fermentum neque. Nunc risus justo, ultrices id consectetur pretium, tempus id leo. Donec elementum a ante ut fermentum. Phasellus elementum feugiat dui in molestie. Praesent sed mollis lectus. Fusce arcu tortor, convallis eu vestibulum et, vehicula ut elit. Sed vehicula id metus sit amet egestas. Praesent quis dui nisi. Fusce rhoncus massa tellus, et dictum ipsum ultrices vel. Praesent bibendum enim ut tristique pellentesque.</p>

				<p>Maecenas quis suscipit justo, <strong>bibendum semper magna.</strong> Pellentesque rutrum erat ante, <em>vel feugiat nisl placerat sit</em> amet. Nulla pharetra elit congue, sagittis augue quis, lacinia enim. Sed eget orci in lorem vehicula <strong><em>condimentum. Vivamus at ex nec</em></strong> orci ultrices facilisis at nec lectus. Phasellus et purus in leo mattis semper vitae at ante. Etiam molestie sit amet ex eget tincidunt. Proin efficitur tortor nec dui pharetra condimentum. Vestibulum dignissim erat purus, nec malesuada elit sagittis in. Nulla rutrum, dolor ac lobortis consectetur, elit nisl bibendum dolor, vel iaculis turpis lorem vitae neque. Duis mattis augue et pretium sodales. Sed vitae sodales nibh. Phasellus justo eros, aliquet ut mi non, feugiat interdum sem. Suspendisse nec arcu quis est interdum volutpat.</p>

				<ul>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Consectetur adipiscing elit</li>
					<li>Integer molestie lorem at massa</li>
					<li>Facilisis in pretium nisl aliquet</li>
					<li>Nulla volutpat aliquam velit
						<ul>
							<li>Phasellus iaculis neque</li>
							<li>Purus sodales ultricies</li>
							<li>Vestibulum laoreet porttitor sem</li>
							<li>Ac tristique libero volutpat at</li>
						</ul>
					</li>
					<li>Faucibus porta lacus fringilla vel</li>
					<li>Aenean sit amet erat nunc</li>
					<li>Eget porttitor lorem</li>
				</ul>

				<ol>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Consectetur adipiscing elit</li>
					<li>Integer molestie lorem at massa</li>
					<li>Facilisis in pretium nisl aliquet</li>
					<li>Nulla volutpat aliquam velit</li>
					<li>Faucibus porta lacus fringilla vel</li>
					<li>Aenean sit amet erat nunc</li>
					<li>Eget porttitor lorem</li>
				</ol>

				<dl>
					<dt>Description lists</dt>
					<dd>A description list is perfect for defining terms.</dd>
					<dt>Euismod</dt>
					<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.</dd>
					<dd>Donec id elit non mi porta gravida at eget metus.</dd>
					<dt>Malesuada porta</dt>
					<dd>Etiam porta sem malesuada magna mollis euismod.</dd>
				</dl>

				<table>
					<caption>
						This is an example table, and this is its caption to describe the contents.
					</caption>
					<thead>
					<tr>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
					<tr>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
					<tr>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
					</tbody>
				</table>

			</section>

			<section class="container">
				<h2>Buttons</h2>
				<button class="btn btn-primary">Primary Button</button>
				<button class="btn btn-secondary">Secondary Button</button>
				<button class="btn btn-tertiary">Tertiary Button</button>
				<button class="btn btn-accent">Accent Button</button>
			</section>


			<blockquote>
				<img class="img-circle" src="images/profile-academic.jpg">
				<p>It was I who ate all the pies! And I would have gotten away with it too, if it weren't for you meddling kids.</p>
				<footer>
					<cite>
						Dr David Hume,
						<span>School of Astrofrench and Other stuff</span>
					</cite>
				</footer>
			</blockquote>
			<div class="card card-overlay">
				<div class="card-body card-inverse">
					<div class="card-title-wrap card-title-wrap-link pull-right">
						<h4 class="card-title">A bold title</h4>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
					<div class="card-media-wrap">
						<img class="card-img-bottom" src="images/students.jpg">
					</div>
					<div class="card-img-overlay">
						<h5 class="card-subtitle">A sub title</h5>
						<p class="card-text">This content is shorter.</p>
					</div>
				</div>
				<div class="card-footer">
					<a href="#" class="chevron-link">Card link</a>
					<a href="#" class="chevron-link">Another link</a>
					<a href="#" class="chevron-link">More linkage</a>
					<a href="#" class="chevron-link">Another link</a>
				</div>
			</div>



			<div class="card-panel">
				<div class="card-panel-header">
					<h2 class="card-panel-title">Standard Card Panel</h2>
				</div>
				<div class="card-panel-body">
					<div class="card">
						<img class="card-img" src="images/promo-1.jpg">
						<h3 class="card-title">Academic excellence</h3>
						<p class="card-subtitle">1st September 2015</p>
						<p class="card-text">We rank amongst the best in the UK. Find out why we're more prestigious than many in the Russel Group.</p>
						<a href="#" class="card-badge kf-comment">5</a>
					</div>
					<div class="card">
						<img class="card-img" src="images/promo-2.jpg">
						<h3 class="card-title">Undergraduates</h3>
						<p class="card-subtitle">28th March 2015</p>
						<p class="card-text">We have a renowned personal teaching style supported by our accessible and passionate academics.</p>
						<a href="#" class="card-badge kf-comment">7</a>
					</div>
					<div class="card">
						<img class="card-img" src="images/promo-3.jpg">
						<h3 class="card-title">Postgraduates</h3>
						<p class="card-subtitle">5th November 2015</p>
						<p class="card-text">We'll equip you with essential skills to give you a competitive advantage when it comes to your career.</p>
						<a href="#" class="card-badge kf-comment">1</a>
					</div>
					<div class="card">
						<img class="card-img" src="images/promo-4.jpg">
						<h3 class="card-title">Visit Kent</h3>
						<p class="card-subtitle">17th May 2015</p>
						<p class="card-text">We're ranked one of the best universities for student satisfaction. Learn more why our students love Kent.</p>
						<a href="#" class="card-badge kf-comment">23</a>
					</div>
				</div>
			</div>

			<blockquote class="social-quote social-quote-twitter">
				<a href="#">
					<button></button>
					<p>Kent study shows that tourism boost in Malta can aid struggling traditional fishermen.</p>
				</a>
				<cite>
					<a href="#">@unikentnews</a>
				</cite>
			</blockquote>

			<div class="card-panel card-panel-primary-tint">
				<div class="card-panel-header">
					<h2 class="card-panel-title">Card Panel (Primary Tint)</h2>

					<div class="card-panel-filter">
						<select class="form-control">
							<option>All news</option>
							<option>Student news</option>
							<option>Staff news</option>
						</select>

						<input placeholder="Filter">
					</div>
					<nav class="card-panel-social ">
						<a title="twitter" href="#" class="kf-twitter"></a>
						<a title="facebook" href="#" class="kf-facebook"></a>
						<a title="instagram" href="#" class="kf-instagram"></a>
						<a title="pinterest" href="#" class="kf-pinterest"></a>
					</nav>
				</div>
				<div class="card-panel-body">
					<div class="card">
						<img class="card-img" src="images/promo-1.jpg">
						<h3 class="card-title">Academic excellence</h3>
						<p class="card-subtitle">1st September 2015</p>
						<p class="card-text">We rank amongst the best in the UK. Find out why we're more prestigious than many in the Russel Group.</p>

						<a class="card-author card-bordered-item" href='#'>
							<img src="images/profile-academic.jpg">
							Dr Jim Groombridge
						</a>

						<p class="card-text"><a href="#">Tag1</a>, <a href="#">Tag2</a>, <a href="#">Another Tag</a></p>
					</div>
					<div class="card">
						<img class="card-img" src="images/promo-2.jpg">
						<h3 class="card-title">Undergraduates</h3>
						<p class="card-subtitle">28th March 2015</p>
						<p class="card-text">We have a renowned personal teaching style supported by our accessible and passionate academics.</p>

						<a class="card-author card-bordered-item" href='#'>
							<img src="images/profile-academic.jpg">
							Dr David Hume
						</a>

						<ul>
							<li><a href="#">Card link</a></li>
							<li><a href="#">Another link</a></li>
							<li><a href="#">More linkage</a></li>
							<li><a href="#">Another link</a></li>
						</ul>
					</div>
					<div class="card">
						<img class="card-img" src="images/promo-3.jpg">
						<h3 class="card-title">Postgraduates</h3>
						<p class="card-subtitle">5th November 2015</p>
						<p class="card-text">We'll equip you with essential skills to give you a competitive advantage when it comes to your career.</p>
						<a class="card-author card-bordered-item" href='#'>
							<img src="images/profile-academic.jpg">
							Dr Jim Groombridge
						</a>

					</div>
					<div class="card">
						<img class="card-img" src="images/promo-4.jpg">
						<h3 class="card-title">Visit Kent</h3>
						<p class="card-subtitle">17th May 2015</p>
						<p class="card-text">We're ranked one of the best universities for student satisfaction. Learn more why our students love Kent.</p>
						<a class="card-author card-bordered-item" href='#'>
							<img src="images/profile-academic.jpg">
							Dr Bob Smithington
						</a>
					</div>
				</div>
			</div>


			<div class="card-panel card-panel-tertiary">
				<div class="card-panel-header">
					<h2 class="card-panel-title">Card Panel (Tertiary)</h2>
					<nav class="pull-right">
						<a href="#">More Stuff</a>
						<a href="#">cupcakes</a>
					</nav>
				</div>
				<div class="card-panel-body">
					<div class="card">
						<img class="card-img" src="images/promo-1.jpg">
						<h3 class="card-title">Academic excellence</h3>
						<p class="card-subtitle">1st September 2015</p>
						<p class="card-text">We rank amongst the best in the UK. Find out why we're more prestigious than many in the Russel Group.</p>
						<p class="card-text"><a href="#">Tag1</a>, <a href="#">Tag2</a>, <a href="#">Another Tag</a></p>
					</div>
					<div class="card">
						<img class="card-img" src="images/promo-2.jpg">
						<h3 class="card-title">Undergraduates</h3>
						<p class="card-subtitle">28th March 2015</p>
						<p class="card-text">We have a renowned personal teaching style supported by our accessible and passionate academics.</p>
						<ul>
							<li><a href="#">Card link</a></li>
							<li><a href="#">Another link</a></li>
							<li><a href="#">More linkage</a></li>
							<li><a href="#">Another link</a></li>
						</ul>
					</div>
					<div class="card">
						<img class="card-img" src="images/promo-3.jpg">
						<h3 class="card-title">Postgraduates</h3>
						<p class="card-subtitle">5th November 2015</p>
						<p class="card-text">We'll equip you with essential skills to give you a competitive advantage when it comes to your career.</p>
					</div>
					<div class="card">
						<img class="card-img" src="images/promo-4.jpg">
						<h3 class="card-title">Visit Kent</h3>
						<p class="card-subtitle">17th May 2015</p>
						<p class="card-text">We're ranked one of the best universities for student satisfaction. Learn more why our students love Kent.</p>
					</div>
				</div>
			</div>

			<div class="card-panel card-panel-primary-tint cards-backed">
				<div class="card-panel-header">
					<h2 class="card-panel-title">Card Panel (backed cards)</h2>
				</div>
				<div class="card-panel-body">
					<div class="card">
						<img class="card-img" src="images/promo-1.jpg">
						<h3 class="card-title">Academic excellence</h3>
						<p class="card-subtitle">1st September 2015</p>
						<p class="card-text">We rank amongst the best in the UK. Find out why we're more prestigious than many in the Russel Group.</p>

						<a class="card-author card-bordered-item" href='#'>
							<img src="images/profile-academic.jpg">
							Dr Jim Groombridge
						</a>

						<p class="card-text"><a href="#">Tag1</a>, <a href="#">Tag2</a>, <a href="#">Another Tag</a></p>
					</div>
					<div class="card">
						<img class="card-img" src="images/promo-2.jpg">
						<h3 class="card-title">Undergraduates</h3>
						<p class="card-subtitle">28th March 2015</p>
						<p class="card-text">We have a renowned personal teaching style supported by our accessible and passionate academics.</p>

						<a class="card-author card-bordered-item" href='#'>
							<img src="images/profile-academic.jpg">
							Dr David Hume
						</a>

						<ul>
							<li><a href="#">Card link</a></li>
							<li><a href="#">Another link</a></li>
							<li><a href="#">More linkage</a></li>
							<li><a href="#">Another link</a></li>
						</ul>
					</div>
					<div class="card">
						<img class="card-img" src="images/promo-3.jpg">
						<h3 class="card-title">Postgraduates</h3>
						<p class="card-subtitle">5th November 2015</p>
						<p class="card-text">We'll equip you with essential skills to give you a competitive advantage when it comes to your career.</p>
						<a class="card-author card-bordered-item" href='#'>
							<img src="images/profile-academic.jpg">
							Dr Jim Groombridge
						</a>

					</div>
					<div class="card">
						<img class="card-img" src="images/promo-4.jpg">
						<h3 class="card-title">Visit Kent</h3>
						<p class="card-subtitle">17th May 2015</p>
						<p class="card-text">We're ranked one of the best universities for student satisfaction. Learn more why our students love Kent.</p>
						<a class="card-author card-bordered-item" href='#'>
							<img src="images/profile-academic.jpg">
							Dr Bob Smithington
						</a>
					</div>
				</div>
			</div>

			<div class="card card-overlay">
				<div class="card-body card-inverse">
					<div class="card-title-wrap card-title-wrap-link pull-right">
						<h4 class="card-title">A video launcher</h4>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
					<div class="card-media-wrap card-media-wrap-video" data-toggle="modal" data-target="#myVideoModal">
						<img class="card-img-bottom" src="images/students.jpg">
					</div>

					<div class="card-img-overlay text-xs-right">
						<h5 class="card-subtitle">A sub title</h5>
						<p class="card-text">This content is shorter.</p>
					</div>
				</div>
				<div class="card-footer">
					<a href="#" class="chevron-link">Card link</a>
					<a href="#" class="chevron-link">Another link</a>
					<a href="#" class="chevron-link">More linkage</a>
					<a href="#" class="chevron-link">Another link</a>
				</div>
			</div>

			<div class="card-panel card-panel-primary-tint">
				<div class="card-panel-header">
					<h2 class="card-panel-title">Card Panel Single + Grid</h2>
				</div>
				<div class="card-panel-body">
					<div class="card-panel-single">
						<div class="card">
							<img class="card-img" src="images/promo-1.jpg">
							<h3 class="card-title">Academic excellence</h3>
							<p class="card-text">We rank amongst the best in the UK. Find out why we're more prestigious than many in the Russel Group.</p>
							<p class="card-text"><a href="#">Tag1</a>, <a href="#">Tag2</a>, <a href="#">Another Tag</a></p>
						</div>
					</div>
					<div class="card-panel-grid">
						<div class="card">
							<img class="card-img" src="images/promo-2.jpg">
							<h3 class="card-title">Undergraduates</h3>
							<p class="card-text">We have a renowned personal teaching style.</p>
						</div>
						<div class="card">
							<img class="card-img" src="images/promo-3.jpg">
							<h3 class="card-title">Postgraduates</h3>
							<p class="card-text">We'll equip you with essential skills.</p>
						</div>
						<div class="card">
							<img class="card-img" src="images/promo-4.jpg">
							<h3 class="card-title">Visit Kent</h3>
							<p class="card-text">Learn more why our students love Kent.</p>
						</div>
						<div class="card">
							<img class="card-img" src="images/promo-1.jpg">
							<h3 class="card-title">More stuff</h3>
							<p class="card-text">We rank amongst the best in the UK.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="card-panel card-panel-tertiary">
				<div class="card-panel-header">
					<h2 class="card-panel-title">Card Panel Single + List</h2>
				</div>
				<div class="card-panel-body">
					<div class="card-panel-single">
						<div class="card">
							<img class="card-img" src="images/promo-1.jpg">
							<h3 class="card-title">Academic excellence</h3>
							<p class="card-text">We rank amongst the best in the UK. Find out why we're more prestigious than many in the Russel Group.</p>
							<p class="card-text"><a href="#">Tag1</a>, <a href="#">Tag2</a>, <a href="#">Another Tag</a></p>
						</div>
					</div>
					<div class="card-panel-list">
						<div class="card">
							<img class="card-img" src="images/promo-2.jpg">
							<h3 class="card-title">Undergraduates</h3>
							<p class="card-text">We have a renowned personal teaching style supported by our accessible and passionate academics.</p>
						</div>
						<div class="card">
							<img class="card-img" src="images/promo-3.jpg">
							<h3 class="card-title">Postgraduates</h3>
							<p class="card-text">We'll equip you with essential skills to give you a competitive advantage when it comes to your career.</p>
						</div>
						<div class="card">
							<img class="card-img" src="images/promo-4.jpg">
							<h3 class="card-title">Visit Kent</h3>
							<p class="card-text">We're ranked one of the best universities for student satisfaction. Learn more why our students love Kent.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="card-panel">
				<div class="card-panel-header">
					<h2 class="card-panel-title">Card Panel Single + Single</h2>
				</div>
				<div class="card-panel-body">
					<div class="card-panel-single">
						<div class="card">
							<img class="card-img" src="images/promo-1.jpg">
							<h3 class="card-title">Academic excellence</h3>
							<p class="card-subtitle">1st September 2015</p>
							<p class="card-text">We rank amongst the best in the UK. Find out why we're more prestigious than many in the Russel Group.</p>
							<p class="card-text"><a href="#">Tag1</a>, <a href="#">Tag2</a>, <a href="#">Another Tag</a></p>
						</div>
					</div>
					<div class="card-panel-single">
						<div class="card">
							<img class="card-img" src="images/promo-2.jpg">
							<h3 class="card-title">Undergraduates</h3>
							<p class="card-subtitle">28th March 2015</p>
							<p class="card-text">We have a renowned personal teaching style supported by our accessible and passionate academics.</p>
							<ul>
								<li><a href="#">Card link</a></li>
								<li><a href="#">Another link</a></li>
								<li><a href="#">More linkage</a></li>
								<li><a href="#">Another link</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="card card-overlay">
				<div class="card-body card-inverse">
					<div class="card-title-wrap card-title-wrap-link pull-right">
						<h4 class="card-title">A video loop</h4>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
					<div class="card-media-wrap">
						<div class="card-embed-wrap embed-responsive embed-responsive-16by9">
							<video autoplay loop class="embed-responsive-item">
								<source src="video/research2.mp4">
							</video>
						</div>
					</div>
					<div class="card-img-overlay">
						<h5 class="card-subtitle">A sub title</h5>
						<p class="card-text">This content is shorter.</p>
					</div>
				</div>
			</div>

			<div class="card card-overlay">
				<div class="card-title-wrap card-title-wrap-link pull-right">
					<h4 class="card-title">A google map</h4>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				</div>
				<div class="card-media-wrap">
					<div class="card-embed-wrap embed-responsive embed-responsive-16by9">
						<iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39932.327605613886!2d1.08385085!3d51.2785439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1447262198975" allowfullscreen></iframe>
					</div>
				</div>
			</div>

			<div class="card card-overlay">
				<div class="card-title-wrap card-title-wrap-link pull-right">
					<h4 class="card-title">A search box</h4>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				</div>
				<div class="card-media-wrap">
					<img class="card-img-bottom" src="images/students.jpg">
				</div>
				<div class="card-img-overlay">
					<form >
						<div class="form-group">
							<label for="search" class="sr-only">Search</label>
							<div class="input-group input-group-lg">
								<input type="search" class="form-control" id="cardCearch" placeholder="Search for interesting things...">
								<span class="input-group-btn">
									<button type="submit" class="btn btn-accent btn-icon"><span class='kf-fw kf-search'></span></button>
								</span>
							</div>
						</div>
					</form>
				</div>
			</div>



			<section class="container">
				<p>&nbsp;</p>
				<h1>And because we can!</h1>
				<p>&nbsp;</p>

			</section>

			<div class="card card-overlay">
				<div class="card-body card-inverse">
					<div class="card-title-wrap card-title-wrap-link card-transparent pull-right">
						<h4 class="card-title">Goodbye</h4>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>

					<div class="card-media-wrap card-media-wrap-video" data-toggle="modal" data-target="#myVideoModal">
						<div class="card-embed-wrap embed-responsive embed-responsive-16by9">
							<video autoplay loop class="embed-responsive-item">
								<source src="http://pantheon.app.www-dev.kent.ac.uk/jt353/theme-project/video-research-student.mp4">
							</video>
						</div>
						<div class="card-img-overlay">
							<h5 class="card-subtitle">On the Left</h5>
							<p class="card-text">This content is shorter.</p>
						</div>
						<div class="card-img-overlay text-xs-right">
							<h5 class="card-subtitle">On the right</h5>
							<p class="card-text">This content is shorter.</p>
						</div>
					</div>

					<div class="card-title-wrap card-title-wrap-link">
						<h4 class="card-title">Hello</h4>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div

				</div>

				<div class="card-footer">
					<a href="#" class="chevron-link">Card link</a>
					<a href="#" class="chevron-link">Another link</a>
					<a href="#" class="chevron-link">More linkage</a>
					<a href="#" class="chevron-link">Another link</a>
					<a href="#" class="chevron-link">Another link</a>
					<a href="#" class="chevron-link">Another link</a>
				</div>
			</div>

<p>&nbsp;</p>

		<?php KentThemeHelper::footer(); ?>


