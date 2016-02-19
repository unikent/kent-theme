window.KENT  = window.KENT || {};

/**
 * Kent Analytics Tracker
 * A simple helper for pushing pages & events to multiple trackers.
 */
window.KENT.kat = {

 	/**
	 *  Track page view
	 */
	"page": function(path){
		var trackers = _kat.trackers();
		for(var t in trackers) {
			try { trackers[t].send('pageview', {"page": path}); } catch(err) { /* Fail silently */ }
		}
		return true;
	},

	/**
	 *  Track event (namespaced)
	 */
	"event": function(category, action, label, value) {
		var ns_category = 'w3beta-' + category;
		return _kat.g_event(ns_category, action, label, value);
	},

	/**
	 * Track social
	 * @see https://developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions
	 */
	"social": function(network, action, target){
		var trackers = _kat.trackers();

		// use current url if no target is provided
		if(typeof target === 'undefined'){
			target = window.location.href;
		}

		for(var t in trackers) {
			try { trackers[t].send('social', network, action, target); } catch(err) { /* Fail silently */ }
		}
		return true;
	},

	/**
	 * Track global event
	 */
	"g_event": function(category, action, label, value) {
		// send to all GA trackers
		var trackers = _kat.trackers();

		// if value is set, check its a number, if not set to 1
		if(typeof value !== 'undefined'){
			value = isNaN(parseInt(value)) ? 1 : parseInt(value);
		}

		for(var t in trackers) {
			try { trackers[t].send('event', category, action, label, value); } catch(err) { /* Fail silently */ }
		}
		return true;
	},

	/**
	 * Get trackers
	 */
	trackers: function(){
		return (typeof ga.getAll !=='undefined') ? ga.getAll() : [];
	}

};