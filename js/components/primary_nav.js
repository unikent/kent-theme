(function(){
	// Primary Nav
	$(".global-nav-menu .global-nav-link > a").click(function(){

		// was this item open?
		var was_open = $(this).parent().hasClass("in");

		// If a menu was already open, close other menu sections (setting expanded as we go)
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

})();