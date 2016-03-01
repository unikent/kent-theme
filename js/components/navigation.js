(function(){

	//get all tabs
	var $tabs = $('a[data-toggle="tab"]');

	// when tab is hidden adjust related accordion tab-title accordingly
	$tabs.on('hidden.bs.tab', function (e) {
		$('.tab-title[data-target="' + $(e.target).attr('href') + '"]').addClass('collapsed').attr("aria-expanded", false);
	});

    // when tab is show adjust related accordion tab-title accordingly
	$tabs.on('shown.bs.tab', function (e) {
		$('.tab-title[data-target="' + $(e.target).attr('href') + '"]').removeClass('collapsed').attr("aria-expanded", true);
	});

	//endure active tab is always visible (may have been collapsed in accordion mode) if tabs are visible.
	$(window).on('viewport:resize',function(){
		$('.nav-tabs:visible').each(function(){
			$($(this).find('.nav-link.active').attr('href')).addClass('active').addClass('in').attr("aria-expanded", true);
		});
	});

})();