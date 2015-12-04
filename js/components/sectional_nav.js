jQuery(document).ready(function(){
	var sectional_nav = $('.departmental-nav .navbar-menu');
	var toggler = $('.departmental-nav .navbar-toggler');

	function respond () {
		if (viewport.is('>=md')) {
			toggler.text('More');
			if (navHasOverflown()) {
				sectional_nav.addClass('overflown');
				toggler.prop('hidden',false);
			}
			else {
				toggler.prop('hidden',true);
				sectional_nav.removeClass('overflown');
				closeNav();
			}
		}
		else {
			toggler.text('Menu');
		}
	}

	function navHasOverflown () {
		var last = sectional_nav.find('a').last();
		return last.position().top >= last.height();
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

	$(window).resize(
		viewport.changed(function(){
			respond();
		})
	);

	respond();
});