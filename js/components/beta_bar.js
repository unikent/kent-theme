jQuery(document).ready(function(){
	var beta_bar = $('.beta-bar');
	var toggler = $('.beta-bar .beta-toggler');

	function respond () {
		if (navHasOverflown()) {
			beta_bar.addClass('overflown');
			toggler.prop('hidden',false);
		}
		else {
			toggler.prop('hidden',true);
			beta_bar.removeClass('overflown');
			closeNav();
		}
	}

	function navHasOverflown () {
		var last = beta_bar.find('p').last();
		return last.position().top >= last.height();
	}

	function toggleNav () {
		if (beta_bar.hasClass('in')) {
			closeNav();
		}
		else {
			openNav();
		}
	}

	function openNav () {
		toggler.addClass('in');
		beta_bar.addClass('in');
	}

	function closeNav () {
		beta_bar.removeClass('in');
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