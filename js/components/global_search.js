window.KENT  = window.KENT || {};
/**
 * Global search
 *
 * Super search located at the top of the page
 *
 * @uses global_nav.js
 */
 (function(){

	// Get global search element.
	var global_search = $('#global-nav-search');

	// Hitting search on empty form closes search menu
	global_search.find('form').submit(function(e){
		if (global_search.find('input[type="search"]').val() === ''){
			e.preventDefault();
			window.KENT.global_nav.closeSearchMenu();
			return false;
		}
	});

	// Focus in search input if global search is toggled
	$(window).on('globalmenu:open', function(e, menu){
		if (menu[0] === global_search[0]){
			global_search.find('input[type="search"]').focus();
		}
	});

	// clicking menu
	$('body').click(function(e){
		if (!global_search.is(e.target) && global_search.has(e.target).length === 0){
			window.KENT.global_nav.closeSearchMenu();
		}
	});

})();
