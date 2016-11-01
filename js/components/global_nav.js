window.KENT  = window.KENT || {};
/**
 * Global navigation
 *
 * Switches between main menu & search menu on mobile.
 * Toggles search on/off on large screens
 *
 */
(function(){
	// Menu references
	// Store control class as data on the elements (just for conveniance)
	var global_menu = $('#global-nav-menu').data('control-class', 'show-global-menu');
	var global_search = $('#global-nav-search').data('control-class', 'show-global-search');

	// List of Menu toggle classes
	// This will have the aria-extanded attribute toggled on them, whenever the menu state changes.
	var global_menu_toggles = $('.menu-button');
	var global_search_toggles = $('.search-button, .search-button-full, .close-search');

	// Toggle a given menu's state
	var toggleMenu = function(button, menu){

		// If this menu is NOT open, open it. Else close it.
		if (!menu.hasClass('in')){
			return openMenu(button, menu);
		} else {
			return closeMenu(button, menu);
		}
	};

	// Close a given menu (toggling its buttons)
	var closeMenu = function(button, menu){

		// Cannot close already closed menu
		if (!menu.hasClass('in')){
			return false;
		}

		// Remove menu & body class
		menu.removeClass('in');
		$('html, body').removeClass(menu.data('control-class'));

		// Update button so it knows it's expanded area is collapsed
		// aria-hidden is not needed on the element, since as the element is displayed none
		// the screen reader won't see it anyway.
		button.attr('aria-expanded', 'false');

		// Trigger event
		$(window).trigger('globalmenu:close', [menu]);

		return true;
	};

	// Open a given menu (toggling its buttons)
	var openMenu = function(button, menu){

		// Cannot open already closed menu
		if (menu.hasClass('in')){
			return false;
		}

		// Set menu & body classes
		menu.addClass('in');
		$('html, body').addClass(menu.data('control-class'));

		// Update button so it knows it's expanded area is collapsed
		button.attr('aria-expanded', true);

		// Fire events
		$(window).trigger('globalmenu:open', [menu]);

		return true;
	};

	// Setup quick access methods to Menu functions
	var global_nav = {
		openSearchMenu: function(){
			return openMenu(global_search_toggles, global_search);
		},
		closeSearchMenu: function(){
			return closeMenu(global_search_toggles, global_search);
		},
		toggleSearchMenu: function(){
			return toggleMenu(global_search_toggles, global_search);
		},
		openMainMenu: function(){
			return openMenu(global_menu_toggles, global_menu);
		},
		closeMainMenu: function(){
			return closeMenu(global_menu_toggles, global_menu);
		},
		toggleMainMenu: function(){
			return toggleMenu(global_menu_toggles, global_menu);
		}
	};

	// Toggle primary Menu (mobile Only)
	global_search_toggles.click(function(e){
		e.preventDefault();
		window.KENT.global_nav.toggleSearchMenu();
		return false;
	});

	// Toggle Search Menu
	global_menu_toggles.click(function(e){
		e.preventDefault();
		window.KENT.global_nav.toggleMainMenu();
		return false;
	});


	// Ensure opening one menu, closes the other.
	$(window).on('globalmenu:open', function(e, menu){
		if (menu[0] === global_search[0]){
			window.KENT.global_nav.closeMainMenu();
		} else {
			window.KENT.global_nav.closeSearchMenu();
		}
	});

	// CLose all menu's if user hits escape
	$(document).keyup(function(e){
		if (e.which === 27){
			window.KENT.global_nav.closeMainMenu();
			window.KENT.global_nav.closeSearchMenu();
			window.KENT.kentbar.closeMenus();
		}
	});

	$(window).on('viewport:change', function() {

		if (ResponsiveBootstrapToolkit.is('>sm')) {
			$('html, body').removeClass('show-global-menu');
		}
	});

	// Homepage Logic
	if ($('.home-nav').length > 0){

		$(window).on('globalmenu:open kentbar_menu:open kentbar_mobilemenu:open', function(){
			$('.home-nav').hide();
		});

		$(window).on('globalmenu:close kentbar_menu:close kentbar_mobilemenu:close', function(e, menu){

			var $body = $('body');

			if (!($body.hasClass('show-global-menu') || $body.hasClass('show-global-search') || $body.hasClass('show-kentbar-menu'))) {
				if (ResponsiveBootstrapToolkit.is('<=sm')) {
					$('.home-nav').delay(300).fadeIn();
				}
			}
		});

		$(window).on('viewport:change', function(){

			if (ResponsiveBootstrapToolkit.is('<=sm')){
				// if menu isn't already open
				if (!$('body').hasClass('show-global-menu') && !$('body').hasClass('show-global-search')){

					$('.home-nav').delay(300).fadeIn();
				}
			} else {
				$('.home-nav').hide();
			}
		});
	}

	// Add to KENT object
	window.KENT.global_nav = global_nav;
})();
