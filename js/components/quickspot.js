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
		},
	};

	// Default config options for QS instances with a "View all results for" top result
	//
	// Instances using this config, should use
	// _click_handler 
	// _display_handler
	// rather than the default methods
	configs.searchWith = $.extend({}, configs.default, {
		// Display Handler wrapper
		"display_handler": function(itm, qs){
			return (itm.kent_search_with_option === true) ? this.kent_search_with(qs) : this._display_handler(itm, qs);
		},
		"kent_search_with": function(qs){
			return "<i class='kf-search'></i> View all results for <strong>" + qs.lastValue + "</strong>";
		},
		"click_handler": function (itm, qs) {
			if(typeof itm.kent_search_with_option === 'boolean' && itm.kent_search_with_option === true){
				return this.no_results_click(qs.lastValue);
			}
			return this._click_handler(itm, qs);
		},
		"parse_results": function (results, options){
			results.unshift({"kent_search_with_option": true});
			return results;
		}
	});


	// Module search
	configs.modules = $.extend({}, configs.default, {
		"url": window.KENT.settings.api_url + "v1/modules/collection/all",
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

	// Scholarships search
	configs.scholarships = $.extend({}, configs.default, {
		"url": window.KENT.settings.api_url + "v1/scholarships/",
		"key_value": "title",
		"search_on": ["title", "code"],
		"auto_highlight":true,

		"click_handler":function(itm){
			document.location.href = '/scholarships/search/' + itm.code;
		},
		"display_handler": function(itm, qs){
			return itm.title + "<br/><span>" + itm.code + "</span>";
		},
		"no_results_click": function (value, qs){
			window.location.href = "/scholarships/search/?search=" + value;
		}
	});

	// Default course configs, including callbacks
	configs.courses_default = $.extend({}, configs.searchWith, {
		"search_on": ["name", "award", "subject", "main_school", "ucas_code", "search_keywords"],
		"auto_highlight":false,
		"_display_handler" : function (itm, qs) {
			// Generate locations list
			var locations = [itm.campus];
			if (itm.additional_locations !== "") {
				locations = locations.concat(itm.additional_locations.split(', '));
			}
			locations = (locations.length > 1) ? [locations.slice(0, -1).join(', '), locations.slice(-1)[0]].join(' and ') : locations[0];

			// Highlight searched word
			return (itm.name + ' - ' + itm.award + ' <br> <span>' + locations + '</span>').replace( new RegExp('(' + qs.lastValue + ')', 'i'), '<strong>$1</strong>');
		},
		"_click_handler": function (itm) {
			document.location = '/courses/undergraduate/' + itm.id + '/' + itm.slug;
		},
		"no_results_click": function (value, qs) {
			window.location.href = "https://www.kent.ac.uk/search/courses?q=" + value;
		}
	});

	// UG
	configs.ug_courses = $.extend({}, configs.courses_default, {
		"url":	window.KENT.settings.api_url + "programmes/current/undergraduate/programmes",
	});

	// PG
	configs.pg_courses = $.extend({}, configs.courses_default, {
		"url":	window.KENT.settings.api_url + "programmes/current/postgraduate/programmes",
		"_click_handler": function (itm) {
			document.location = '/courses/postgraduate/' + itm.id + '/' + itm.slug;
		}
	});

	// Combined
	configs.all_courses = $.extend({}, configs.courses_default, {
		"url":	"https://webtools-test.kent.ac.uk/programmes/api/2016/all/programmes/",

		"_display_handler" : function (itm, qs) {

			// Generate locations list
			var locations = [itm.campus];
			if (itm.additional_locations !== "") {
				locations = locations.concat(itm.additional_locations.split(', '));
			}
			locations = (locations.length > 1) ? [locations.slice(0, -1).join(', '), locations.slice(-1)[0]].join(' and ') : locations[0];

			// Highlight searched word
			return (itm.name + ' - ' + itm.award + ' <span class="level"> &nbsp; ' + itm.level_name + '</span><br><span>' + locations + '</span>').replace( new RegExp('(' + qs.lastValue + ')', 'i'), '<strong>$1</strong>');
		},
		"_click_handler": function (itm) {
			document.location = '/courses/' + ( (itm.level==='UG') ? 'undergraduate' : 'postgraduate') +'/' + itm.id + '/' + itm.slug;
		},
		"data_pre_parse": function(data, options){
			for(var i in data){
				data[i].qs_result_class = data[i].level.toLowerCase();

				if(data[i].level === 'UG'){
					data[i].level_name = 'Undergraduate';
				}else{
					var type = data[i].programme_type;
					// taught /research
					if(type.indexOf("taught-research") !== -1)
					{
						data[i].level_name = 'Postgraduate Taught-research';
					}
					else if(type.indexOf("taught") !== -1)
					{
						data[i].level_name = 'Postgraduate Taught';
					}
					else
					{
						data[i].level_name = 'Postgraduate Research';
					}
				}
			}
			return data;
		},
		"results_footer": "<div class='course-links'><a class='chevron-link' href='/courses/undergraduate/search'>All Undergraduate</a><a  class='chevron-link' href='/courses/undergraduate/search'>All Postgraduate </a><a class='chevron-link' href='/courses/part-time/index.html'>Short Courses</a></div>",
		"ready": function(qs){
			// Override link action to pass search value
			$(qs.container).find("div.course-links a").click(function(e){
				e.preventDefault();
				document.location.href = $(this).attr('href') + '?search=' + qs.lastValue;
			});
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

		// Debug
		window.KENT.log("[Quickspot] Instance created on #" + $(this).attr('id') + " with config " + $(this).data('quickspot-config'));
	});

});



