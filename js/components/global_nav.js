// go go global nav
(function(){

	var global_menu = $('.global-nav-menu');
	var global_search = $('.global-nav-search');

	var menusOpen = function(){
		return (global_menu.data('open') || global_search.data('open') );
	};

	var openMenu = function(menu){

		// If a menu is already open
		if(menusOpen()){
			if(global_menu.data('open')){
				closeMenu(global_menu);
			} 
			if(global_search.data('open')){
				closeMenu(global_search);
			}
		}else{
			// if not, open requested menu
			$('body').addClass('show-global-menu');
			if(menu.hasClass('global-nav-search')){
				$('body').addClass('show-global-menu-search');
			}
			menu.addClass('in');
			menu.data('open', true); 
		}	
	};
	var closeMenu = function(menu){
		$('body').removeClass('show-global-menu').removeClass('show-global-menu-search');
		menu.removeClass('in');
		menu.data('open', false);
	};

	$('.menu-button').click(function(){
		openMenu(global_menu);	
	});
	$('.search-button,.search-button-full').click(function(){
		openMenu(global_search);
		global_search.find("input[type='search']").focus();
	});
	$('.close-search').click(function(){
		closeMenu(global_search);
	});

	// second level nav
	global_menu.find('.global-nav-link a').click(function(){
		// remove any old opens
		var was_open = $(this).parent().hasClass('in');

		// Close all
		$(this).parent().parent().find('.in').removeClass('in');
		// if this was open, close fully
		if(was_open){
			$(this).parent().parent().removeClass('in');
		}else{
			// if not, open it
			$(this).parent().toggleClass('in').parent().addClass('in');
		}
	});

})();

// Dept nav
$('.navbar-toggler').click(function(){
	$('.navbar-menu').toggleClass('in');
});