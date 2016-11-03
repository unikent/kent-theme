$(document).ready(function(){
	const viewport = ResponsiveBootstrapToolkit;

	// Plyr controls template - Use kf icons
	const plyr_controls = `
		<button type="button" data-plyr="play" class="plyr__play-large">
			<span class="kf-play-circle"></span>
			<span class="plyr__sr-only">Play</span>
		</button>

		<div class='plyr__controls'>
			<button type='button' data-plyr='play'>
				<span class="kf-play"></span>
				<span class="plyr__tooltip">Play</span>
			</button>

			<button type='button' data-plyr='pause'>
				<span class="kf-pause"></span>
				<span class="plyr__tooltip">Pause</span>
			</button>

			<span class='plyr__progress'>
				<label for='seek{id}' class='plyr__sr-only'>Seek</label>
				<input id='seek{id}' class='plyr__progress--seek' type='range' min='0' max='100' step='0.1' value='0' data-plyr='seek'>
				<progress class='plyr__progress--played' max='100' value='0' role='presentation'></progress>
				<progress class='plyr__progress--buffer' max='100' value='0'>
					<span>0</span>% buffered
				</progress>
				<span class='plyr__tooltip'>00:00</span>
			</span>

			<span class='plyr__time'>
				<span class='plyr__sr-only'>Current time</span>
				<span class='plyr__time--current'>00:00</span>
			</span>
			<span class='plyr__time'>
				<span class='plyr__sr-only'>Duration</span>
				<span class='plyr__time--duration'>00:00</span>
			</span>

			<button type='button' data-plyr='mute'>
				<span class="kf-volume-mute icon--muted"></span>
				<span class="kf-volume-medium"></span>
				<span class='plyr__tooltip'>Toggle Mute</span>
			</button>

			<span class='plyr__volume'>
				<label for='volume{id}' class='plyr__sr-only'>Volume</label>
				<input id='volume{id}' class='plyr__volume--input' type='range' min='0' max='10' value='5' data-plyr='volume'>
				<progress class='plyr__volume--display' max='10' value='0' role='presentation'></progress>
			</span>

			<button type='button' data-plyr='captions'>
				<span class="kf-captions icon--captions-on"></span>
				<span class="kf-captions-off"></span>
				<span class='plyr__tooltip'>Toggle Captions</span>
			</button>

			<button type='button' class="download-transcript">
				<span class="kf-file-text"></span>
				<span class='plyr__tooltip'>Access Transcript</span>
			</button>

			<button type='button' data-plyr='fullscreen'>
				<span class="kf-compress icon--exit-fullscreen"></span>
				<span class="kf-expand"></span>
				<span class='plyr__tooltip'>Toggle Fullscreen</span>
			</button>
		</div>
	`;
	/**
	 * Control class for "player" instances
	 */
	var Player = function($container){
		// vars
		this.container = $container;
		this.video = $container.find('.video-player').first();
		this.placeholder = $container.find('img').first();
		this.plyr = null;

		// settings for instance
		this.settings = {
			transcript:  $container.data('transcript') || false,
			mode:  $container.data('mode') || 'inline',
			fullscreen_down: $container.data('fullscreen-down') || 'xs',
			fullscreen_up:  $container.data('fullscreen-up') || 'xxl'
		};

		/**
		 * Initalise "video" element
		 */
		this.init = function(){

			this.container.click( () => {
				// if Player isn't booted, boot it
				if (!this.plyr){
					window.KENT.log('[Video player] Init Plyr');
					this.boot();
				}
				// Show player if not already playing
				if (!this.container.hasClass('playing')){
					this.show();
				}
			});
		};

		/**
		 * When user attempts to play video, initalise video player instance
		 */
		this.boot = function(){

			// Generate plyr instance
			this.plyr = plyr.setup(this.video[0], {
				autoplay: true,
				html: plyr_controls,
				disableContextMenu: false
			})[0];

			// Hookup events
			this.video.on('ready', () => { this.setupTranscript(); });
			this.video.on('pause', () => {
				// hide on pause if not full screen
				if (!this.plyr.isFullscreen()){
					this.hide();
				}
			});
			this.video.on('enterfullscreen', () => {

				window.TESTP = this.plyr;
				var wrap  = this.video.find('.plyr__video-wrapper');
				if (wrap.length > 0 && wrap.find('.fs-toggle').length === 0 ){
					wrap.prepend('<span class="kf-close fs-toggle"></span>');
					wrap.find('.fs-toggle').click(() => {this.hide();});
				}

				window.KENT.log(this.plyr);
			});
			this.video.on('exitfullscreen', () => {
				this.hide();
			});
			this.video.on('ended', () => {
				this.hide();
			});

		};
		/**
		 * Setup transcription link
		 */
		this.setupTranscript = function(){
			const button = this.video.find('.download-transcript');
			if (this.settings.transcript) {
				button.click(() => { document.location.href = this.settings.transcript; });
			} else {
				button.hide();
			}
		};

		/**
		 * Show video
		 * Display video and play it ( use attributes to determine whether to play inline or "fullscreen")
		 */
		this.show = function(){
			this.container.addClass('playing');
			this.container.closest('.card-media-inline').addClass('card-media-enabled');

			if (
				this.settings.mode === 'fullscreen' ||
				(Object.keys(window.KENT.settings.breakpoints).indexOf(this.settings.fullscreen_down) !== -1 && viewport.is('<=' + this.settings.fullscreen_down)) ||
				(this.settings.fullscreen_up && Object.keys(window.KENT.settings.breakpoints).indexOf(this.settings.fullscreen_up) !== -1 && viewport.is('>=' + this.settings.fullscreen_up))
			){
				this.plyr.toggleFullscreen();
			}


			this.play();
		};

		/**
		 * Close video
		 * Hide video and pause it
		 */
		this.hide = function(){
			if (this.plyr.isFullscreen()){
				return this.plyr.toggleFullscreen();
			}

			/**
			 * This is horrible but it fixes a bug were safari crashes if you try and set a fullscreen element
			 * to display:none. This queues it so it doesn't try and set display:none until safari has actually
			 * completed the fullscreen exit.
			 */
			setTimeout( () => {
				this.pause();
				this.container.removeClass('playing');
				this.container.closest('.card-media-inline').removeClass('card-media-enabled');
			}, 0);

		};

		/**
		 * Play video
		 */
		this.play = function(){
			this.plyr.play();
		};

		/**
		 * Pause video
		 */
		this.pause = function(){
			this.plyr.pause();
		};

		/**
		 * Pause & hide video
		 */
		this.stop = function(){
			this.hide();
		};

		this.init();
	};

	$('.video-launcher').each(function(){
		// create player instance
		new Player($(this));

		// Debug
		window.KENT.log('[Video player] Instance created');
	});
});
