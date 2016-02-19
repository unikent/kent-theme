window.KENT  = window.KENT || {};
/**
 * Quickspot helper
 *
 * Centralises common configuration & initalisation options for QuickSpot search
 *
 * @uses https://github.com/thybag/quick-spot
 */
 (function(){

 	// create obj
	window.KENT.quickspot = { config: {} };
	var configs = window.KENT.quickspot.config;

	// Default config options
	configs.default = {
		"disable_occurrence_weighting": true,
		"screenreader":	true,
		"prevent_headers": true,
		"max_results": 150,
		"no_results": function (qs, val) {
			return "<a class='quickspot-result selected'>Press enter to search...</a>";
		},
		"no_results_click": function (value, qs) {
			window.location.href = "https://www.kent.ac.uk/search/?q=" + value;
		}
	};

	// Module search
	configs.modules = $.extend({}, configs.default, {
		"url": "https://api.kent.ac.uk/api/v1/modules/collection/all",
		"search_on": ["title", "sds_code"],
		"key_value": "title",
		"auto_highlight":true,
		"display_handler": function(itm,qs){
			return itm.title + "<br/><span>" + itm.sds_code + "</span>";
		},
		"click_handler":function(itm){
			document.location.href = '/courses/modules/module/' + itm.sds_code;
		},
		"no_results_click": function (value, qs){
		    window.location.href = "/courses/modules/?search=" + value;
		},
		"data_pre_parse": function(data, options){
			return data.modules;
		},
		"loaded": function(){
			qs.datastore.filter(function(o){ return o.running === true; });
		}
	});

	// Default course configs, including callbacks
	configs.courses_default = $.extend({}, configs.default, {
		"search_on": ["name", "award", "subject", "main_school", "ucas_code", "search_keywords"],
		"auto_highlight":false,
		"display_handler" : function (itm, qs) {

			// Generate locations list
			var locations = [itm.campus];
			if (itm.additional_locations !== "") {
				locations = locations.concat(itm.additional_locations.split(', '));
			}
			locations = (locations.length > 1) ? [locations.slice(0, -1).join(', '), locations.slice(-1)[0]].join(' and ') : locations[0];

			// Highlight searched word
			return (itm.name + ' - ' + itm.award + ' <br> <span>' + locations + '</span>').replace( new RegExp('(' + qs.lastValue + ')', 'i'), '<strong>$1</strong>');
		},
		"click_handler": function (itm) {
			document.location = '/courses/undergraduate/' + itm.id + '/' + itm.slug;
		},
		"no_results_click": function (value, qs) {
			window.location.href = "https://www.kent.ac.uk/search/courses?q=" + value;
		}
	});

	// UG
	configs.ug_courses = $.extend({}, configs.courses_default, {
		"url":	"https://api.kent.ac.uk/api/programmes/current/undergraduate/programmes",
	});

	// PG
	configs.pg_courses = $.extend({}, configs.courses_default, {
		"url":	"https://api.kent.ac.uk/api/programmes/current/postgraduate/programmes",
		"click_handler": function (itm) {
			document.location = '/courses/postgraduate/' + itm.id + '/' + itm.slug;
		}
	});

})();

/**
 * Scan for inputs with data-quickspot-config attribute and initalise them as quickspot instances
 */
jQuery(document).ready(function($){

	$('input[data-quickspot-config]').each(function(){

		// Load config
		var config = KENT.quickspot.config[$(this).data('quickspot-config')] || KENT.quickspot.config.defaults;
		config = $.extend({}, config);

		// Set additional options
		config.target = $(this).attr('id');

		// Override data source url
		if($(this).data('quickspot-source')){
			config.url = $(this).data('quickspot-source');
		}
		
		// Override results container location
		if($(this).data('quickspot-target')){
			config.results_container = $(this).data('quickspot-target');
		}

		// Boot quickspot
		var qs = quickspot.attach(config);
		$(this).attr('autocomplete','off');
		$(this).data('qs',qs);
	});

});



