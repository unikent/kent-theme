jQuery(document).ready(function(){
	var beta_bar = $('.beta-bar');

	function toggleNav() {
		if(beta_bar.hasClass('hidden')){
			beta_bar.removeClass('hidden').slideDown();

		}else {
			beta_bar.addClass('hidden').slideUp();
			Cookies.set('kentbeta_dismissed', '1', {expires: 365});
		}
	}

	if(beta_bar.length >0 ) {

		var toggler = $('.beta-toggler');

		var dismissed = typeof Cookies.get('kentbeta_dismissed') !== 'undefined';

		if(!dismissed) {
			beta_bar.slideDown();
		}else{
			beta_bar.addClass('hidden');
		}

		toggler.click(function () {
			toggleNav();
		});
	}
});