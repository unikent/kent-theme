// Disable scroll zooming and bind back the click event
var onEmbedClickHandler;

var onEmbedMouseleaveHandler = function (event) {
	var that = $(this);

	that.on('click', onEmbedClickHandler);
	that.off('mouseleave', onEmbedMouseleaveHandler);
	that.find('iframe').css("pointer-events", "none");
};

onEmbedClickHandler = function (event) {
	var that = $(this);

	// Disable the click handler until the user leaves the area
	that.off('click', onEmbedClickHandler);

	that.find('iframe').css("pointer-events", "auto");

	// Handle the mouse leave event
	that.on('mouseleave', onEmbedMouseleaveHandler);
};

jQuery(document).ready(function () {

	$('.card-embed-wrap').on('click', onEmbedClickHandler);
});
