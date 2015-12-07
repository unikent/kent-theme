jQuery(document).ready(function(){
	var sectional_nav = $('.departmental-nav .navbar-menu');
	var toggler = $('.departmental-nav .navbar-toggler');

	function respond () {
		if (viewport.is('>=md')) {

			if (navHasOverflown()) {
				sectional_nav.addClass('overflown');
				toggler.addClass('overflown');
			}
			else {
				sectional_nav.removeClass('overflown');
				toggler.removeClass('overflown');
				closeNav();
			}
		}
	}

	function navHasOverflown () {
		return sectional_nav.find('a').last().position().top >= sectional_nav.find('a').last().height();
	}

	function toggleNav () {
		if (sectional_nav.hasClass('in')) {
			closeNav();
		}
		else {
			openNav();
		}
	}

	function openNav () {
        $("body").addClass('show-departmental-menu');
		toggler.addClass('in');
		sectional_nav.addClass('in');
	}

	function closeNav () {
        $("body").removeClass('show-departmental-menu');
		sectional_nav.removeClass('in');
		toggler.removeClass('in');
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