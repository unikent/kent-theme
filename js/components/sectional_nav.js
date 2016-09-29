jQuery(document).ready(function(){
	var sectional_nav = $('.departmental-nav .navbar-menu');
	var toggler = $('.departmental-nav .navbar-toggler');

	var viewport = ResponsiveBootstrapToolkit;

	// if no nav, don't bother booting menu
	if (sectional_nav.length === 0){
		return;
	}

	function respond () {
		if (viewport.is('>=md')) {

			if (navHasOverflown() && sectional_nav.find('a').length > 1) {
				sectional_nav.addClass('overflown');
				toggler.addClass('overflown');
			} else {
				sectional_nav.removeClass('overflown');
				toggler.removeClass('overflown');
				closeNav();
			}
		}
	}

	function navHasOverflown () {
		var links = sectional_nav.find('a');

		return (links.last().position().top > links.first().position().top) || links.length <= 1;
	}

	function toggleNav () {
		if (sectional_nav.hasClass('in')) {
			closeNav();
		} else {
			openNav();
		}
	}

	function openNav () {
		$('body').addClass('show-departmental-menu');
		toggler.addClass('in').attr('aria-expanded', 'true');
		sectional_nav.addClass('in');
	}

	function closeNav () {
		$('body').removeClass('show-departmental-menu');
		toggler.removeClass('in').attr('aria-expanded', 'false');
		sectional_nav.removeClass('in');
	}

	toggler.click(function () {
		if (navHasOverflown()) {
			toggleNav();
		}
	});

	$(window).on('viewport:resize', function(){
		respond();
	});

	respond();
});
