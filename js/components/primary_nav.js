(function(){
	var zTimer = null;
	// Primary Nav
	$(".global-nav-menu .global-nav-link > a").click(function(){
		clearTimeout(zTimer);
		// was this item open?
		var was_open = $(this).parent().hasClass("in");

		// If a menu was already open, close other menu sections (setting expanded as we go)
		if($(this).parent().parent().hasClass("in")){
			var menus = $(this).parent().parent().find(".in").not($(this).parent());
				menus.removeClass("in");
				menus.find('.global-nav-link-submenu').css('zIndex',0);
				menus.children(":first").attr("aria-expanded", "false");
		}

		if(was_open){
			var $that = $(this);
			// if the clicked item was open, close all
			$that.parent().removeClass("in").parent().removeClass("in");

			zTimer = setTimeout(function(){
				$that.parent().find('.global-nav-link-submenu').css('zIndex',0);
			},600);

		}else{
			//  if not, tell item its expanded & toggle it all open
			var menu = $(this).attr("aria-expanded", "true").parent().toggleClass("in");
			menu.find('.global-nav-link-submenu').css('zIndex',1);
			menu.parent().addClass("in");
		}
	});

})();