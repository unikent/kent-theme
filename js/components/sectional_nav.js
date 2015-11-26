jQuery(document).ready(function(){
	var sectional_nav = $('.departmental-nav .navbar-menu');
	var toggler = $('<span></span>').addClass('navbar-menu-toggler hide').text('More');
	sectional_nav.append(toggler);

	function respond () {
		if (viewport.is('>=md') && elementHasOverflown(sectional_nav[0])) {
			sectional_nav.addClass('overflown');
			toggler.removeClass('hide');
		}
		else {
			toggler.addClass('hide');
			sectional_nav.removeClass('overflown');
		}
	}

	function elementHasOverflown (el) {
		return el.offsetHeight < el.scrollHeight || el.offsetWidth < el.scrollWidth;
	}

	$(window).resize(
		viewport.changed(function(){
			respond();
		})
	);

	respond();
});