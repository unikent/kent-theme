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
			var modal_at = $(this).data('modal-at') || 'xs';

			// check that we have a video source & a template for this mode
			if (!src || !Handlebars.templates['video_' + mode]) {
				return;
			}

			// force modal mode if specified or we're at xs
			if (viewport.is('<=' + modal_at)) {
				mode = 'modal';
			}

			// get the right video container
			var video_container = $(Handlebars.templates['video_' + mode]({
				id: this.video_containerId,
				// src: src,
				// transcript: transcript,
				// controls: controls
			}));

			// var video_el = video_container.find('video');
			// var video = video_el[0];

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

			// // all click handler to parent because thats where out video launcher button will be
			// video_el.parent().click(function () {
			// 	toggleVideo();
			// });

			// video_el.on('playing', function (e) {
			// 	video_el.parent().removeClass('video-launcher');
			// });

			// video_el.on('pause ended', function (e) {
			// 	video_el.parent().addClass('video-launcher');
			// });

			switch(mode) {
				case 'inline':
					$(this).children().hide();
					$(this).unbind('click');
					$(this).css('background-image', 'none');
					$(this).removeClass('video-launcher');
					$(this).append(video_container);
					player = video_container[0];

					$(this).on('showAndPlay', function (e) {
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

					$(this).on('showAndPlay', function (e) {
						this.video_container.modal('show');
					});

					break;
			}

			player = jwplayer(player).setup({
				file: src,
				// image: "//example.com/uploads/myPoster.jpg",
				width: "100%",
				aspectratio: "16:9",
				// title: 'Basic Video Embed',
				//description: 'A video with a basic title and description!',
				//mediaid: '123456'
			});

			player.onPlay(function () {
				video_container.addClass('playing');
			});

			player.onPause(function () {
				video_container.removeClass('playing');
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