/**
 * Global navigation 
 *
 * Switches between main menu & search menu
 *
 */
(function(){

	// store control class as data on the elements (just for conveniance)
	var global_menu = $(".global-nav-menu").data("control-class", "show-global-menu");
	var global_search = $(".global-nav-search").data("control-class", "show-global-search");

	var global_menu_toggles = $(".menu-button");
	var global_search_toggles = $(".search-button, .search-button-full, .close-search");

	// Toggle Menu
	var toggleMenu = function(button, menu){

		// If this menu is NOT open, open it. Else close it.
		if(!menu.hasClass("in")){
			return openMenu(button, menu);
		}else{
			return closeMenu(button, menu);
		}
	};

	// Close Menu
	var closeMenu = function(button, menu){

		// Cannot close already closed menu
		if(!menu.hasClass("in")){
			return false;
		}

		// Remove menu & body class
		menu.removeClass("in");
		$("body").removeClass(menu.data("control-class"));
		
		// Update button so it knows it's expanded area is collapsed
		// aria-hidden is not needed on the element, since as the element is displayed none
		// the screen reader won't see it anyway.
		button.attr("aria-expanded", "false");

		$(window).trigger("menu:close", menu);

		return true;
	};

	// Open Menu
	var openMenu = function(button, menu){

		// Cannot open already closed menu
		if(menu.hasClass("in")){
			return false;
		}

		// Set menu & body classes
		menu.addClass("in");
		$("body").addClass(menu.data("control-class"));

		// Update button so it knows it's expanded area is collapsed
		button.attr("aria-expanded", true);

		$(window).trigger("menu:open", menu);

		return true;
	};

	// Global methods
	var global_nav = {
		openSearchMenu: function(){
			return openMenu(global_search_toggles, global_search);
		},
		closeSearchMenu: function(){
			return closeMenu(global_search_toggles, global_search);
		},
		openMainMenu: function(){
			return openMenu(global_menu_toggles, global_menu);
		},
		closeMainMenu: function(){
			return closeMenu(global_menu_toggles, global_menu);
		}
	};

	window.KENT.global_nav = global_nav;

	// Toggle primary Menu (mobile Only)
	global_search_toggles.click(function(){
		toggleMenu(global_search_toggles, global_search);
	});

	// Toggle Search Menu
	global_menu_toggles.click(function(){
		toggleMenu(global_menu_toggles, global_menu);
	});

	// If this menu is search, set focus to search bar.
	$(window).on("menu:open", function(menu){
		if(menu === global_search){
			global_search.find("input[type='search']").focus();
		}
	});




	// Homepage Logic
	if($('.home-nav').length > 0){
		$(window).on("menu:open", function(){
			$('.home-nav').hide();	
		});
		$(window).on("menu:close", function(menu){
			//menu.hasClass("in") &&
			if( ResponsiveBootstrapToolkit.is('<=sm')) {
				$('.home-nav').delay(300).fadeIn();
			}	
		});
		$(window).on("viewport:change", function(){
			if(ResponsiveBootstrapToolkit.is('<=sm')){
				$('.home-nav').delay(300).fadeIn();
			}else{
				$('.home-nav').hide();
			}
		});
	}


/*

	var closeSearch = function(){
		closeMenu($(".search-button, .search-button-full, .close-search"), global_search);
	};

	// Hitting search on empty form closes search menu
	global_search.find('form').submit(function(e){
		if(global_search.find("input[type='search']").val()===''){
			e.preventDefault();
			closeSearch();
			return false;
		}
	});

	global_search.find("input[type='search']").click(function(e){
		e.preventDefault();
		return false;
	});

	$('body').click(closeSearch);

	$(document).keyup(function(e){
		if(e.which === 27){
			closeSearch();
		}
	});
*/
})();
