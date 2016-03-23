/**
 * Debug helper
 * Log only shown when KENT.debug is true.
 */
 window.KENT  = window.KENT || {};

window.KENT.log = function(){
	if (window.KENT.settings && window.KENT.settings.debug){
		/*eslint no-console: 0*/
		console.log(arguments.length === 1 ? arguments[0] : arguments);
	}
};
