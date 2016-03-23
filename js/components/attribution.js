/**
 * Toggles attribution text display on/off
 */
 
jQuery(document).ready(function($){
	$(".attribution").click(function(){
		$(this).toggleClass("in");
	});
	// Debug
	window.KENT.log("Initiating: Attribution");
	window.KENT.log($(".attribution"));
});
