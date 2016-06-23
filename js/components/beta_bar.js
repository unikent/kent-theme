/**
 * Beta bar collapse
 *
 * Small bit of JS to facilitate the beta bar open/close logic.
 * This will be removed once the product moves out of beta
 */
jQuery(document).ready(function(){

	var beta_bar = $('#beta-bar');
	var toggler = $('.beta-toggler');

	// Toggle beta bar
	function toggleNav() {
		if (beta_bar.hasClass('hidden')){
			beta_bar.removeClass('hidden');

			toggler.each(function(){
				$(this).attr('aria-expanded', 'true');
			});

		} else {
			beta_bar.addClass('hidden');
			toggler.each(function(){
				$(this).attr('aria-expanded', 'false');
			});
			window.Cookies.set('kentbeta_dismissed', '1', {expires: 365});
		}
	}
	// If beta bar exists on page
	if (beta_bar.length > 0) {

		var dismissed = typeof window.Cookies.get('kentbeta_dismissed') !== 'undefined';

		// Apply show/hide state from cookie.
		if (!dismissed) {
			beta_bar.removeClass('hidden');
		} else {
			beta_bar.addClass('hidden');
		}

		// hook up toggler
		toggler.click(function () {
			toggleNav();
		});
	}
});
