/**
 * Slider
 *
 * Provides carousel functionality to kent-theme
 *
 * @uses https://github.com/kenwheeler/slick/
 */
window.KENT  = window.KENT || {};

// Default options
window.KENT.kentslider = {

	default: {
		config: {
			dots:          true,
			dotsClass:     'kent-slider-dots',
			mobileFirst:   true,
			useTransform:  true,
			accessibility: true
		}
	},
	// react helper
	react: function($el, breakpoint, config){
		var loaded = $el.hasClass('slick-initialized');
		if (ResponsiveBootstrapToolkit.is(breakpoint)) {
			if (!loaded){
				// init slider
				$el.slick(config);
			}
		} else {
			if (loaded){
				// de-init slider
				$el.slick('unslick');
			}
		}
	}
};

// Settings for profile_feature
window.KENT.kentslider.profile_feature = {
	config: $.extend({}, window.KENT.kentslider.default.config, {
		slidesToShow: 2,
		slidesToScroll: 2
	}),
	breakpoint:'<=md'
};

window.KENT.kentslider.related_courses = {
	config: $.extend({}, window.KENT.kentslider.default.config, {
		dots: false,
		infine: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: window.KENT.settings.breakpoints.xl,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: window.KENT.settings.breakpoints.lg,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: window.KENT.settings.breakpoints.sm,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	})
};

$(document).ready(function(){
	// If class is found, init slider
	$('.kent-slider').each(function(){

		// Load config
		var slider_config = $(this).data('slider-config');
		if (typeof slider_config === 'undefined') {
			slider_config = 'default';
		}

		var config = window.KENT.kentslider[slider_config].config;

		// Does this carousel behave differently at different breakpoints
		var breakpoint  = typeof window.KENT.kentslider[slider_config].breakpoint !== 'undefined' ? window.KENT.kentslider[slider_config].breakpoint : false;

		if (breakpoint){
			// react to inital size
			window.KENT.kentslider.react($(this), breakpoint, config);
			var $this = $(this);
			// Handle resize on view port change
			$(window).on('viewport:resize', function(){
				window.KENT.kentslider.react($this, breakpoint, config);
			});

		} else {
			// Init slider
			$(this).slick(config);
		}

		// Debug
		window.KENT.log('[Kent-slider] Instance created', $(this));
	});

});
