
/**
 * Responsive Collapse
 *
 * Mirrors the behaviour of http://v4-alpha.getbootstrap.com/components/collapse/ in a breakpoint aware way
 *
 * @uses https://github.com/maciej-gurban/responsive-bootstrap-toolkit
 * @uses responsive_util.js
 */
jQuery(document).ready(function(){

	var viewport = ResponsiveBootstrapToolkit;
	var $collabsables = $("[data-toggle=\"collapse_responsive\"]");

	var viewportChange = function(){

		window.KENT.log("Initiating: Collapse Responsive");
		window.KENT.log($collabsables);

		$collabsables.each(function(){
			var $target = $($(this).data("target") || null);

			if (
				!(
					($target.hasClass("collapse-xl-down") && viewport.is("<=xl")) ||
					($target.hasClass("collapse-lg-down") && viewport.is("<=lg")) ||
					($target.hasClass("collapse-md-down") && viewport.is("<=md")) ||
					($target.hasClass("collapse-sm-down") && viewport.is("<=sm")) ||
					($target.hasClass("collapse-xs-down") && viewport.is("<=xs"))
				)
			){
				$(this).removeClass("collapsed").removeAttr("aria-expanded", "true");
				$target.addClass("in");
			} else {
				$(this).addClass("collapsed").attr("aria-expanded", "false");
				$target.removeClass("in");
			}
		});
	};

	$collabsables.click(function(e){
		e.preventDefault();

		var $this = $(this);
		var isCollapsed = $(this).hasClass("collapsed");
		var $parent = $($this).closest($this.data("parent")) || null;
		var $target = $($this.data("target")) || null;

		var $isTab = $parent.hasClass("tab-content");
		// If target isn"t collapsed at this breakpoint, ignore.
		if (
			!(
				($target.hasClass("collapse-xl-down") && viewport.is("<=xl")) ||
				($target.hasClass("collapse-lg-down") && viewport.is("<=lg")) ||
				($target.hasClass("collapse-md-down") && viewport.is("<=md")) ||
				($target.hasClass("collapse-sm-down") && viewport.is("<=sm")) ||
				($target.hasClass("collapse-xs-down") && viewport.is("<=xs"))
			)
		){
			return;
		}

		// else, toggle it open / shut
		if ($parent.length > 0){
			var $open = $parent.find(".in");
			$open.removeClass("in").removeClass("active")
				.each(
					function(){
						$parent.find("[data-target=\"#" + $(this).attr("id") + "\"]").addClass("collapsed");
						if ($isTab){
							$parent.parent().find(".nav-link").removeClass("active");
						}
					}
			);
		}

		if ($target.length > 0){
			$target.toggleClass("in", isCollapsed).toggleClass("active", isCollapsed);
			// Add expanded state (this only needs to be set when collapsing is possible)
			$this.toggleClass("collapsed", !isCollapsed).attr("aria-expanded", (!isCollapsed ? "false" : "true"));
			if ($isTab){
				$parent.parent().find(".nav-link[href=\"" + $this.data("target") + "\"]").addClass("active");
			}
		}
	});

	// When breakpoint changes
	$(window).on("viewport:change", viewportChange);

	//init
	viewportChange();
});
