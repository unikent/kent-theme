/**
 * Toggles attribution text display on/off
 */

jQuery(document).ready(function($){
	$('.attribution').click(function(e){
		$(this).toggleClass('in');
		e.preventDefault();
		e.stopPropagation();
	});
	// Debug
	window.KENT.log('Initiating: Attribution');
	window.KENT.log($('.attribution'));
});
