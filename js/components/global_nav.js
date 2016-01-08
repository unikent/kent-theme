// go go global nav
(function(){

	// store control class as data on the node (just for conveniance)
	var global_menu = $(".global-nav-menu").data("control-class", "show-global-menu");
	var global_search = $(".global-nav-search").data("control-class", "show-global-search");

	var toggleMenu = function(button, menu){
		// If no menu is open, open this one, else this is a close action
		if(!menu.hasClass("in")){
			openMenu(button, menu);
		}else{
			closeMenu(button, menu);
		}
	};

	var closeMenu = function(button, menu){

		$("body").removeClass(menu.data("control-class"));
		menu.removeClass("in");

		// Update button so it knows it's expanded area is collapsed
		// aria-hidden is not needed on th element, since as the element is displayed none
		// the screen reader won't see it anyway.
		button.attr("aria-expanded", "false");
	};

	var openMenu = function(button, menu){
		// Select find
		if(menu === global_search){
			global_search.find("input[type='search']").focus();
		}

		$("body").addClass(menu.data("control-class"));
		menu.addClass("in");
		// update button so it knows it's expanded area is collapsed
		button.attr("aria-expanded", true);
	};

	var closeSearch = function(){
		closeMenu($(".search-button, .search-button-full, .close-search"), global_search);
	};

	// Hook up menu links
	$(".menu-button").click(function(){
		toggleMenu($(this), global_menu);	
	});

	$(".search-button, .search-button-full").click(function(e){
		toggleMenu($(".search-button, .search-button-full, .close-search"), global_search);
		e.preventDefault();
		return false;
	});

	$(".close-search").click(function(){
		closeMenu($(this), global_search);
	});

	global_search.find('form').submit(function(e){
		if(global_search.find("input[type='search']").val()===''){
			e.preventDefault();
			closeSearch();
			return false;
		}
	});

	$('body').click(closeSearch);

	$(document).keyup(function(e){
		if(e.which === 27){
			closeSearch();
		}
	});

})();