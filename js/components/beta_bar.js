jQuery(document).ready(function(){
	var beta_bar = $('.beta-bar');


	function respond() {
		if (barHasOverflown()) {
			beta_bar.addClass('overflown');
			toggler.prop('hidden', false);

			if (barIsMinimal()) {
				toggler.text('Learn more');
			}
			else {
				toggler.text('More');
			}
		}
		else {
			toggler.prop('hidden', true);
			beta_bar.removeClass('overflown');
			closeNav();
		}
	}

	function barHasOverflown() {
		var last = beta_bar.find('p').last();
		var first = beta_bar.find('p').first();
		return last.position().top > first.position().top;
	}

	function barIsMinimal() {
		var second = beta_bar.find('p:nth-child(2)').first();
		var first = beta_bar.find('p').first();
		return second.position().top > first.position().top;
	}

	function toggleNav() {
		if (beta_bar.hasClass('in')) {
			closeNav();
		}
		else {
			openNav();
		}
	}

	function openNav() {
		toggler.addClass('in');
		beta_bar.addClass('in');
	}

	function closeNav() {
		beta_bar.removeClass('in');
		toggler.removeClass('in');
	}

	if(beta_bar.length >0 ) {

		var toggler = $('.beta-bar .beta-toggler');

		toggler.click(function () {
			if (barHasOverflown()) {
				toggleNav();
			}
		});

		$(window).on('viewport:resize', function () {
			respond();
		});

		respond();
	}
});