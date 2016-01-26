window.KENT  = window.KENT || {};

window.KENT.quickspot = {

	display_handler : function (itm, qs) {
		var locs = [itm.campus];
		if (itm.additional_locations !== "") {
			locs = locs.concat(itm.additional_locations.split(', '));
		}
		locs = (locs.length > 1) ? [locs.slice(0, -1).join(', '), locs.slice(-1)[0]].join(' and ') : locs[0];
		// Highlight searched word
		return (itm.name + ' - ' + itm.award + ' <br> <span>' + locs + '</span>').replace( new RegExp('(' + qs.lastValue + ')', 'i'), '<strong>$1</strong>');
	},

	no_results: function (qs, val) {
		return "<a class='quickspot-result selected'>Press enter to search...</a>";
	},

	no_results_click: function (value, qs) {
		var url = "https://www.kent.ac.uk/search/courses?q=" + value;
		window.location.href = url;
	}
};

KENT.quickspot.config = {
	courses_defaults: {
		"url":                          "https://webtools-test.kent.ac.uk/programmes/api/current/undergraduate/programmes",
			"search_on":                    ["name", "award", "subject", "main_school", "ucas_code", "search_keywords"],
			"disable_occurrence_weighting": true,
			"screenreader":                 true,
			"prevent_headers":              true,

			"display_handler":  window.KENT.quickspot.display_handler,
			"no_results": window.KENT.quickspot.no_results,
			"no_results_click": window.KENT.quickspot.no_results_click,

			"click_handler":    function (itm) {
			document.location = '/courses/undergraduate/' + itm.id + '/' + itm.slug;
		}
	}
};


KENT.quickspot.config.ug_courses = KENT.quickspot.courses_defaults;

KENT.quickspot.config.pg_courses = $.extend(KENT.quickspot.config.courses_defaults,{

	"url":	"https://webtools-test.kent.ac.uk/programmes/api/current/postgraduate/programmes",
	"click_handler":    function (itm) {
		document.location = '/courses/postgraduate/' + itm.id + '/' + itm.slug;
	}

});

jQuery(document).ready(function($){

	$('input[data-quickspot-config]').each(function(){

		$(this).attr('autocomplete','off');

		var config = $(this).data('quickspot-config');
		var target = $(this).data('quickspot-target');

		config = KENT.quickspot.config[config] || KENT.quickspot.config.courses_defaults;

		var qs = quickspot.attach($.extend(config,{
			target:$(this).attr('id'),
			"results_container":target
		}));

		$(this).data('qs',qs);
	});

});



