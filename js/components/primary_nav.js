/**
 * Primary Navigation
 *
 * Handles open/closing of the submenus in the global nav menu.
 *
 */
 (function(){
	var zTimer = null;

	// Primary Nav
	$(".global-nav-menu .global-nav-link > a, .home-nav .global-nav-link > a").click(function(){
		clearTimeout(zTimer);

		// Get current menu item
		var item = $(this).parent();
		// Get menu container
		var container = item.parent();

		// Close submenus in provided menuItems
		var closeSubMenus = function(menuItems){
			return menuItems.find('.global-nav-link-submenu').css('zIndex',0).css('height','0px');
		};

		if(container.hasClass("in")){
			// If a menu was already open, 
			// Close all menu items other than the one selected (setting expanded as we go)
			var menus = container.find(".in").not(item);
			menus.removeClass("in");
			closeSubMenus(menus);

			menus.children(":first").attr("aria-expanded", "false");
		}else{
			// If menu wasn't open, preperate submenus for being shown.
			closeSubMenus(container);
		}

		if(item.hasClass("in")){
			// if the clicked menu item was open, close the menu
			item.removeClass("in").parent().removeClass("in");

			zTimer = setTimeout(function(){
				closeSubMenus(item);
			},600);

		}else{
			//  if not, tell item its expanded & toggle it all open
			var menu = $(this).attr("aria-expanded", "true").parent().toggleClass("in");
			menu.find('.global-nav-link-submenu').css('zIndex',1).css('height','auto');
			menu.parent().addClass("in");
		}
	});

})();