/**
 * Parallax
 *
 * Provides parallax functionality
 *
 * @uses https://github.com/markdalgleish/stellar.js
 */
 var stellarActivated = false;

function react_to_window() {
	if (ResponsiveBootstrapToolkit.is("xs")) {
		if (stellarActivated === true) {
			$(window).data("plugin_stellar").destroy();
			stellarActivated = false;
		}
		$(".media-wrap-parallax").css("min-height", "");
	} else {
		if (stellarActivated === false) {

			$.stellar({
				// Set scrolling to be in either one or both directions
				horizontalScrolling: false,
				verticalScrolling: true,

				// Set the global alignment offsets
				horizontalOffset: 0,
				verticalOffset: 0,

				// Refreshes parallax content on window load and resize
				responsive: false,

				// Select which property is used to calculate scroll.
				// Choose "scroll", "position", "margin" or "transform",
				// or write your own "scrollProperty" plugin.
				scrollProperty: "scroll",

				// Select which property is used to position elements.
				// Choose between "position" or "transform",
				// or write your own "positionProperty" plugin.
				positionProperty: "transform",

				// Enable or disable the two types of parallax
				parallaxBackgrounds: true,
				parallaxElements: true,

				// Hide parallax elements that move outside the viewport
				hideDistantElements: false,

				// Customise how elements are shown and hidden
				hideElement: function($elem) { $elem.hide(); },
				showElement: function($elem) { $elem.show(); }
			});

			$(window).data("plugin_stellar").init();
			stellarActivated = true;
		}
		var $ratio = ResponsiveBootstrapToolkit.is("<xl") ? ( 9 / 16 ) : ( 7 / 16 );
		$(".media-wrap-parallax").each(function () {
			$(this).css("min-height", ($(window).width() * $ratio) + "px");
		});
		$(window).data("plugin_stellar").refresh();
	}
}

$(window).on("viewport:resize", function(){
	react_to_window();
});


$(document).ready(function(){
	react_to_window();
});
