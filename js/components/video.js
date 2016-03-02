$(document).ready(function(){
	var launcherCount = 0;
	$('.video-launcher').each(function(){

		// initiate and show the video as a modal
		var init = function () {
			// we need some data
			var This = this;
			var src = $(this).data('src') || false;
			var transcript = $(this).data('transcript') || false;
			var controls = typeof $(this).data('controls') === 'undefined' || ($(this).data('controls') === 'controls' || $(this).data('controls') === true) ? true : false;
			var mode = $(this).data('mode') || 'modal'; //default to modal
			var modal_down = $(this).data('modal-down') || 'xs';
			var modal_up = $(this).data('modal-up') || false;

			// check that we have a video source & a template for this mode
			if (!src || !Handlebars.templates['video_' + mode]) {
				return;
			}

			// force modal mode if specified or we're at xs
			if (viewport.is('<=' + modal_down) || (modal_up && viewport.is('>=' + modal_up))) {
				mode = 'modal';
			}

			// get the right video container
			var video_container = $(Handlebars.templates['video_' + mode]({
				id: this.video_containerId,
				// src: src,
				vimertranscript: transcript,
				// controls: controls
			}));

			var player = false; // this will be an instance of jwplayer later on

			var playVideo = function () {
				player.play(true); console.log('playing');
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

			switch(mode) {
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
				width: "100%",
				aspectratio: "16:9", description: "some kind of description"
			});

			player.on('play', function () {
				$(This).closest('.card-overlay').addClass('card-media-enabled');
				$(player.getContainer()).removeClass('video-launcher');
			});

			player.on('pause', function (state) { console.log('pausing');
				$(This).closest('.card-overlay').removeClass('card-media-enabled');
				player.setControls(false);
				player.prevState = state.oldstate;
				$(player.getContainer()).addClass('video-launcher');
				$(player.getContainer()).off('click').on('click', function (e){

						player.trigger('displayClick'); return false;
					
				});
				
				player.on('displayClick', function (something) {
					if (player.prevState !== 'playing') {
						player.setControls(true);
						player.play();
						player.off('displayClick');
					}
					player.prevState = null;
					return false;
				});
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
			}
			else{
				$(this).trigger('showAndPlay');
			}
		});

	});
});