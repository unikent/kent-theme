/**
 * Parallax
 *
 * Provides parallax functionality
 *
 * @uses https://github.com/markdalgleish/stellar.js
 */
(function(){

	var stellarSetup = false;
	var stellarActive = false;

	// Enable stellar.js
	var initStellar = function(){

		if (stellarSetup === true){
			$(window).data("plugin_stellar").init();
		} else {
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
			stellarSetup = true;
		}
		stellarActive = true;
	};

	// Disable stellar.js
	var disableStellar = function(){
		$(window).data("plugin_stellar").destroy();
		stellarActive = false;
	};

	// Handle resize
	function react_to_window() {

		if (ResponsiveBootstrapToolkit.is("xs")) {

			if (stellarActive){
				disableStellar();
			}
			$(".media-wrap-parallax").css("min-height", "");

		} else {

			if (!stellarActive){
				initStellar();
			}

			// Set ratio's
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
})();
