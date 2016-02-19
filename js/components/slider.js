
window.KENT  = window.KENT || {};

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

	react: function($el, breakpoint, config){
		var loaded = $el.hasClass('slick-initialized');
		if(ResponsiveBootstrapToolkit.is(breakpoint)) {
			if(!loaded){
				$el.slick(config);
			}
		}else{
			if(loaded){
				$el.slick("unslick");
			}
		}
	}
};

window.KENT.kentslider.profile_feature = {
	config: $.extend({},window.KENT.kentslider.default.config ,{
		slidesToShow:2,
		slidesToScroll:2
	}),
	breakpoint:'<=md'
};

$(document).ready(function(){

	$('.kent-slider').each(function()
	{
		var slider_config = $(this).data('slider-config');

		if(typeof slider_config ==='undefined') {
			slider_config = 'default';
		}

		var config = window.KENT.kentslider[slider_config].config;

		var breakpoint  = typeof window.KENT.kentslider[slider_config].breakpoint !=='undefined'?window.KENT.kentslider[slider_config].breakpoint:false;
		if(breakpoint){

			window.KENT.kentslider.react($(this), breakpoint, config);
			var $this = $(this);
			$(window).on('viewport:resize',function(){
				window.KENT.kentslider.react($this, breakpoint, config);
			});

		}else{
			$(this).slick(config);
		}

		// Debug
		window.KENT.log("[Kent-slider] Instance created", $(this));
	});

});