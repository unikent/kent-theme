$(document).ready(function(){
	var launcherCount = 0;
	$('.video-launcher').each(function(){

		// initiate and show the video as a modal
		var init = function () {
			// we need some data
			var src = $(this).data('src') || false;
			var transcript = $(this).data('transcript') || false;

			if (!src) {
				return;
			}

			var modal = $(Handlebars.templates.video_modal({
				id: this.popupId,
				src: src,
				transcript: transcript
			}));

			var videoEl = modal.find('video');

			if (videoEl.length !== 1) {
				return;
			}

			var video = videoEl[0];

			$('body').append(modal);
			modal.modal({show:false});

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
			videoEl.parent().click(function () {
				toggleVideo();
			});

			videoEl.on('playing', function (e) {
				videoEl.parent().removeClass('video-launcher');
			});

			videoEl.on('pause ended', function (e) {
				videoEl.parent().addClass('video-launcher');
			});

			modal.on('shown.bs.modal', function (e) {
				playVideo();
			});

			modal.on('hide.bs.modal', function (e) {
				pauseVideo();
			});

			this.popup = modal;
			this.popup.modal('show');
		};

		this.popupId = launcherCount;
		launcherCount += 1;

		// add click handler to initiate/show popup video
		$(this).click(function () {
			if (!this.popup) {
				init.apply(this);
			}
			else{
				this.popup.modal('show');
			}
		});

	});
});