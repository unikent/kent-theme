/**
 * Responsive helper
 *
 * Triggers events on resize and breakpoint changes
 *
 * Events:
 * - viewport:resize - fired after every resize
 * - viewport:change - fired only if resize triggers breakpoint change
 *
 * @uses https://github.com/maciej-gurban/responsive-bootstrap-toolkit
 */
(function($, viewport){

	// Supported breakpoints
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
			// resize has occured, fire event
			$(window).trigger('viewport:resize');

			if(previousBreakpoint !== breakpoint){
				// Debug
				window.KENT.log("Breakpoint change: " + previousBreakpoint + ' -> ' + breakpoint);

				// breakpoint has changed, fire evenet
				$(window).trigger('viewport:change');
				previousBreakpoint = breakpoint;
			}
		})
	);

})(jQuery, ResponsiveBootstrapToolkit);