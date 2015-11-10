// go go global nav
(function(){

	var global_menu = $('.global-nav-menu');
	var global_search = $('.global-nav-search');

	var menusOpen = function(){
		return (global_menu.data('open') || global_search.data('open') );
	};

	var openMenu = function(menu){
		$('body').addClass('show-mobile-menu');
		menu.addClass('open');
		menu.data('open', true); 
	};
	var closeMenu = function(menu){
		$('body').removeClass('show-mobile-menu');
		menu.removeClass('open');
		menu.data('open', false); 
	};

	$('.menu-button').click(function(){
		if(menusOpen()){
			if(global_menu.data('open')){
				closeMenu(global_menu);
			} 
			if(global_search.data('open')){
				closeMenu(global_search);
			}
		}else{
			openMenu(global_menu);	
		}

	});

	$('.search-button,.search-button-full').click(function(){
		openMenu(global_search);
	});
	$('.close-search').click(function(){
		closeMenu(global_search);
	});

	// second level nav
	global_menu.find('.global-nav-link a').click(function(){
		$(this).parent().toggleClass('open').parent().toggleClass('nav-menu-open');
	});

})();

// Dept nav
$('.navbar-toggler').click(function(){
	$('.navbar-menu').toggleClass('open');
});