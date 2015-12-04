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

	// Hook up menu links
	$(".menu-button").click(function(){
		toggleMenu($(this), global_menu);	
	});
	$(".search-button, .search-button-full").click(function(){
		toggleMenu($(this), global_search);
	});
	$(".close-search").click(function(){
		closeMenu($(this), global_search);
	});

	// Primary Nav
	global_menu.find(".global-nav-link > a").click(function(){

		// was this item open?
		var was_open = $(this).parent().hasClass("in");

		// If a menu was already open, close other menu sections
		if($(this).parent().parent().hasClass("in")){

			$(this).parent().parent().find(".in").removeClass("in").children(":first").attr("aria-expanded", "false"); 
		}

		if(was_open){
			// if the clicked item was open, close all
			$(this).parent().parent().removeClass("in");
		}else{
			//  if not, tell item its expanded & toggle it all open
			$(this).attr("aria-expanded", "true").parent().toggleClass("in").parent().addClass("in");

		}
	});


	$(window).on("viewport:change",function(){

	});

})();