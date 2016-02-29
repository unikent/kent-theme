(function(){

	var $tabs = $('a[data-toggle="tab"]');
	$tabs.on('hidden.bs.tab', function (e) {
		$('.tab-title[data-target="' + $(e.target).attr('href') + '"]').addClass('collapsed').attr("aria-expanded", false);
	});

	$tabs.on('shown.bs.tab', function (e) {
		$('.tab-title[data-target="' + $(e.target).attr('href') + '"]').removeClass('collapsed').attr("aria-expanded", true);
	});

})();