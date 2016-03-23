/**
 * Click to interact logic
 *
 * Disable scrolling/zooming on iframes with .click-to-interact class
 * User click activates scrolling behavior and loss of focus deactivates it
 *
 */
(function(){
	var onEmbedClickHandler, onEmbedMouseleaveHandler;

	// Disable pointer events
	onEmbedMouseleaveHandler = function (event) {
		// Re add the click to interact handler
		$(this).on("click", onEmbedClickHandler);
		// remove the leaving handler
		$(this).off("mouseleave", onEmbedMouseleaveHandler);
		// Disable pointer events
		$(this).find("iframe").css("pointer-events", "none");
	};

	// Enable pointer events
	onEmbedClickHandler = function (event) {
		// Disable the click handler until the user leaves the area
		$(this).off("click", onEmbedClickHandler);
		// Handle the mouse leave event
		$(this).on("mouseleave", onEmbedMouseleaveHandler);
		// Enable the pointer events
		$(this).find("iframe").css("pointer-events", "auto");
	};

	jQuery(document).ready(function() {
		// Disable pointer on class, and attach click action to re-enable them
		$(".click-to-interact").on("click", onEmbedClickHandler).find("iframe").css("pointer-events", "none");

		window.KENT.log("Initiating: Click to interact");
		window.KENT.log($(".click-to-interact"));
	});

})();
