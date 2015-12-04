jQuery(document).ready(function(){
	var beta_bar = $('.beta-bar');
	var toggler = $('.beta-bar .beta-toggler');

	function respond () {
		if (barHasOverflown()) {
			beta_bar.addClass('overflown');
			toggler.prop('hidden',false);

			if (barIsMinimal()) {
				toggler.text('Learn more');
			}
			else {
				toggler.text('More');
			}
		}
		else {
			toggler.prop('hidden',true);
			beta_bar.removeClass('overflown');
			closeNav();
		}
	}

	function barHasOverflown () {
		var last = beta_bar.find('p').last();
		var firstp = beta_bar.find('p').first();
		return last.position().top > firstp.position().top;
	}

	function barIsMinimal () {
		var second = beta_bar.find('p:nth-child(2)').first();
		var firstp = beta_bar.find('p').first();
		return second.position().top > firstp.position().top;
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
		if (barHasOverflown()) {
			toggleNav();
		}
	});

	$(window).on('viewport:resize', function(){
		respond();
	});

	respond();
});