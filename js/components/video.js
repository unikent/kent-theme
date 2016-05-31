$(document).ready(function(){
	var viewport = ResponsiveBootstrapToolkit;
	
	var Modal = new function(){

		this.player = null;
		this.el = $(Handlebars.templates['video_modal']({}));

		//init
		$("body").append(this.el);
		this.el.modal({show:false});

		this.el.on("hide.bs.modal", () => {
			this.player.pause();
		});

		this.populate = function(player){
			// don't update if unchanged
			if(player == this.player) return true;

			console.log("player has changed?");
			
			this.player = player;
			this.el.find(".video-container").append(this.player.video_el);
			//if(data.transcript) modal.find(".video-transcript").append(player.transcript);
		}

		this.show = function(){
			console.log("show popup");
			this.el.modal('show');
		}

		this.hide = function(){
			this.el.modal('hide');
		}
	};

	var Player = function($owner){

		this.trigger = $owner;
		this.video_el = $owner.find(".video-player").first();
		this.placeholder = $owner.find("img").first();

		this.plyr = null;
		
		this.settings = {
			controls:  typeof $owner.data('controls') === 'undefined' || ( $owner.data('controls') === 'controls' ||  $owner.data('controls') === true),
			transcript:  $owner.data('transcript') || false,
			mode:  $owner.data('mode') || 'modal',
			modal_down: $owner.data('modal-down') || 'xs',
			modal_up:  $owner.data('modal-up') || 'xxl',
			image:  $owner.data('image') || false
		};

		this.init = function(){

			console.log("create player");
			// if no image provided, use first <img> tag
			if (!this.settings.image) {
				this.settings.image = $(this).find('img').first();
				this.settings.image = (this.settings.image.length !== 0) ? this.settings.image.attr('src') : false;
			}

			this.plyr = plyr.setup(this.video_el[0], {
				autoplay: true
			})[0];
		};

		this.show = function(){
			console.log("show player");


			// force modal mode if specified or we're at xs
			//if (viewport.is('<=' + this.settings.modal_down) || (this.settings.modal_up && viewport.is('>=' + this.settings.modal_up))) {
			//	this.settings.mode = 'modal';
			//}
			console.log(this.settings.mode);
			if (this.settings.mode === 'inline'){
				$owner.addClass("playing");
				$owner.closest('.card-media-inline').addClass('card-media-enabled');
			} else {
				console.log(this.ply);
				$owner.addClass("playing");
				this.plyr.toggleFullscreen();
				//Modal.populate(this);
				//Modal.show();
			}

			this.play();
		};

		this.hide = function(){
			$owner.removeClass("playing");
		};



		this.play = function(){
			console.log("!!!!!!!");
			window.test = this.plyr;
			this.plyr.play();
		}
		this.pause = function(){
			this.plyr.pause();
		}
		this.stop = function(){
			this.plyr.pause();
			// re add cover image

			//this.plyr.play();
		}







		this.init();

		





		


		/*
		// get the right video container
		var video_container = $(Handlebars.templates['video_' + this.settings.mode]({
			id: this.video_containerId
			//transcript: transcript
		}));
		*/

		//window.KENT.log('tada');
		//window.KENT.log(this.settings);




	};
	$('.video-launcher').each(function(){

		let _container = $(this);

		$(this).find("img").click(function(){
			
			let player = null;
			if (_container.data('player')){
				player = _container.data('player');
			} else {
				player = new Player(_container);
				_container.data("player", player);
			}
		
			player.show();

		});
	});





	/*
	var viewport = ResponsiveBootstrapToolkit;
	var launcherCount = 0;
	$('.old-video-launcher').each(function(){

		// initiate and show the video as a modal
		var init = function () {
			// we need some data
			var This = this;
			var src = $(this).data('src') || false;
			var transcript = $(this).data('transcript') || false;
			var controls = typeof $(this).data('controls') === 'undefined' || ($(this).data('controls') === 'controls' || $(this).data('controls') === true);
			var mode = $(this).data('mode') || 'modal'; //default to modal
			var modal_down = $(this).data('modal-down') || 'xs';
			var modal_up = $(this).data('modal-up') || 'xxl';
			var image = $(this).data('image') || false;

			// check that we have a video source & a template for this mode
			if (!src || !Handlebars.templates['video_' + mode]) {
				return;
			}

			// force modal mode if specified or we're at xs
			if (viewport.is('<=' + modal_down) || (modal_up && viewport.is('>=' + modal_up))) {
				mode = 'modal';
			}

			// if no image provided, use first <img> tag
			if (!image) {
				image = $(this).find('img').first();
				image = (image.length !== 0) ? image.attr('src') : false;
			}

			// get the right video container
			var video_container = $(Handlebars.templates['video_' + mode]({
				id: this.video_containerId
				//transcript: transcript
			}));

			var player = false; // this will be an instance of jwplayer later on

			var playVideo = function () {
				player.play(true);
			};

			var pauseVideo = function () {
				player.pause(true);
			};

			var stopVideo = function () {
				player.stop();
			};

			var toggleVideo = function () {
				player.play();
			};

			switch (mode) {
				case 'inline':
					$(This).closest('.card-overlay').addClass('card-media-inline');
					$(This).children().hide();
					$(This).unbind('click');
					$(This).css('background-image', 'none');
					$(This).removeClass('video-launcher');
					$(This).append(video_container);
					player = video_container[0];

					$(This).on('showAndPlay', function (e) {
						playVideo();
					});

					break;

				case 'modal':
					$('body').append(video_container);
					player = video_container.find('.video-container')[0];
					video_container.modal({show:false});

					video_container.on('shown.bs.modal', function (e) {
						playVideo();
					});

					video_container.on('hide.bs.modal', function (e) {
						pauseVideo();
					});

					$(This).on('showAndPlay', function (e) {
						this.video_container.modal('show');
					});

					break;
			}

			player = jwplayer(player).setup({
				file: src,
				width: '100%',
				aspectratio: '16:9',
				controls: controls,
				image: image
			});

			// logic for when controls are disabled
			if (!controls) {
				player.on('displayClick', function () {
					toggleVideo();
				});
			}

			player.on('play', function () {
				$(This).closest('.card-overlay').addClass('card-media-enabled');
				$(player.getContainer()).removeClass('video-launcher');
			});

			player.on('pause complete', function (state) {
				$(This).closest('.card-overlay').removeClass('card-media-enabled');
				$(player.getContainer()).addClass('video-launcher');
				player.prevState = state.oldstate;

				// logic for when controls are disabled
				if (!controls) {
					$(player.getContainer()).off('click').on('click', function (e){
						if (player.prevState !== 'playing') {
							player.trigger('displayClick');
						}
						player.prevState = null;
					});
				} else {
					// logic for when controls are enabled
					player.setControls(false);
					$(player.getContainer()).off('click').on('click', function (e){
						player.trigger('displayClick'); return false;
					});

					player.on('displayClick', function () {
						if (player.prevState !== 'playing') {
							player.setControls(true);
							playVideo();
							player.off('displayClick');
						}
						player.prevState = null;
						return false;
					});

				}
			});

			this.video_container = video_container;

			//play it straight away when ready
			player.onReady(function () {
				$(This).trigger('showAndPlay');

			});
		};

		this.video_containerId = launcherCount;
		launcherCount += 1;

		// add click handler to initiate/show video
		$(this).click(function () {
			if (!this.video_container) {
				init.apply(this);
			} else {
				$(this).trigger('showAndPlay');
			}
		});

		// Debug
		window.KENT.log('[Video player] Instance created', $(this));
	});
	*/
});
