/**
 * Beta bar collapse
 *
 * Small bit of JS to facilitate the beta bar open/close logic.
 * This will be removed once the product moves out of beta
 */
 jQuery(document).ready(function(){

	var beta_bar = $('.beta-bar');

	// Toggle beta bar
	function toggleNav() {
		if(beta_bar.hasClass('hidden')){
			beta_bar.removeClass('hidden').slideDown();
		} else {
			beta_bar.addClass('hidden').slideUp();
			Cookies.set('kentbeta_dismissed', '1', {expires: 365});
		}
	}
	// If beta bar exists on page
	if(beta_bar.length > 0) {

		var toggler = $('.beta-toggler');
		var dismissed = typeof Cookies.get('kentbeta_dismissed') !== 'undefined';
		
		// Apply show/hide state from cookie.
		if(!dismissed) {
			beta_bar.slideDown();
		}else{
			beta_bar.addClass('hidden');
		}	

		// hook up toggler
		toggler.click(function () {
			toggleNav();
		});
	}
});