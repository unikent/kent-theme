(function($, viewport){

	var visibilityDivs = {
		'xs': $('<div class="hidden-sm-up"></div>'),
		'sm': $('<div class="hidden-xs-down hidden-md-up"></div>'),
		'md': $('<div class="hidden-sm-down hidden-lg-up"></div>'),
		'lg': $('<div class="hidden-md-down hidden-xl-up"></div>'),
		'xl': $('<div class="hidden-lg-down hidden-xxl-up"></div>'),
		'xxl': $('<div class="hidden-xl-down hidden-xxxl-up"></div>'),
		'xxxl': $('<div class="hidden-xxl-down"></div>')

	};

	viewport.use('Custom', visibilityDivs);

	// Add our custom event
	var previousBreakpoint = '';
	$(window).resize(
		viewport.changed(function(){
			var breakpoint = viewport.current();

			$(window).trigger('viewport:resize');

			if(previousBreakpoint !== breakpoint){
				 $(window).trigger('viewport:change');
				 previousBreakpoint = breakpoint;
				console.log(breakpoint);
			}
		})
	);


})(jQuery, ResponsiveBootstrapToolkit);