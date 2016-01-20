$(document).ready(function(){
	var launcherCount = 0;
	$('.video-launcher').each(function(){

		// we need some data
		var modalId = 'videoModal' + launcherCount;
		var src = $(this).data('src') || false;
		var transcript = $(this).data('transcript') || false;

		if (!src) {
			return;
		}

		var modal = $(Handlebars.templates.video_modal({
			id: modalId,
			src: src,
			transcript: transcript
		}));

		var videoEl = modal.find('video');

		if (videoEl.length !== 1) {
			return;
		}

		video = videoEl[0];

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

		videoEl.click(function () {
			toggleVideo();
		});

		videoEl.on('playing', function (e) {
			videoEl.removeClass('paused');
		});

		videoEl.on('pause ended', function (e) {
			videoEl.addClass('paused');
		});

		modal.on('shown.bs.modal', function (e) {
			playVideo();
		});

		modal.on('hide.bs.modal', function (e) {
			pauseVideo();
		});


		// add click handler to 
		$(this).click(function () {
			modal.modal('show');
		});

		launcherCount += 1;
	});
});