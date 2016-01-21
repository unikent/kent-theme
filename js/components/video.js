$(document).ready(function(){
	var launcherCount = 0;
	$('.video-launcher').each(function(){

		// initiate and show the video as a modal
		var init = function () {
			// we need some data
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
				id: this.popupId,
				src: src,
				transcript: transcript,
				controls: controls
			}));

			var video_el = video_container.find('video');
			var video = video_el[0];

			var playVideo = function () {
				if (video.paused) {
					video.play();
				}
			};

			var pauseVideo = function () {
				if (!video.paused) {
					video.pause();
				}
			};

			var toggleVideo = function () {
				if (video.paused) {
					video.play();
				}
				else {
					video.pause();
				}
			};

			// all click handler to parent because thats where out video launcher button will be
			video_el.parent().click(function () {
				toggleVideo();
			});

			video_el.on('playing', function (e) {
				video_el.parent().removeClass('video-launcher');
			});

			video_el.on('pause ended', function (e) {
				video_el.parent().addClass('video-launcher');
			});

			switch(mode) {
				case 'inline':
					$(this).children().hide();
					$(this).unbind('click'); $(this).css('background-image', 'none');
					$(this).removeClass('video-launcher');
					$(this).append(video_container);

					$(this).on('showAndPlay', function (e) {
						playVideo();
					});

					$(this).trigger('showAndPlay');

					break;

				case 'modal':
					$('body').append(video_container);
					video_container.modal({show:false});

					video_container.on('shown.bs.modal', function (e) {
						playVideo();
					});

					video_container.on('hide.bs.modal', function (e) {
						pauseVideo();
					});

					$(this).on('showAndPlay', function (e) {
						this.video_container.modal('show');
						playVideo();
					});

					//play it straight away
					video_container.modal('show');
					break;
			}

			this.video_container = video_container;
		};

		this.video_containerId = launcherCount;
		launcherCount += 1;

		// add click handler to initiate/show popup video
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