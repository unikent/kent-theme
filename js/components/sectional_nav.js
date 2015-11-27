jQuery(document).ready(function(){
	var sectional_nav = $('.departmental-nav .navbar-menu');
	var toggler = $('.departmental-nav .navbar-toggler');

	function respond () {
		if (viewport.is('>=md')) {
			toggler.text('More');
			if (navHasOverflown()) {
				sectional_nav.addClass('overflown');
				toggler.removeClass('hide');
			}
			else {
				toggler.addClass('hide');
				sectional_nav.removeClass('overflown');
				closeNav();
			}
		}
		else {
			toggler.text('Menu');
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
		toggler.addClass('open');
		sectional_nav.addClass('in');
	}

	function closeNav () {
		sectional_nav.removeClass('in');
		toggler.removeClass('open');
	}

	toggler.click(function () {
		if (navHasOverflown()) {
			toggleNav();
		}
	});

	$(window).resize(
		viewport.changed(function(){
			respond();
		})
	);

	respond();
});