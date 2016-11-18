/**
 * Default kent-theme JS settings
 * These can be overwritten by setting these values before including the kent theme js
 */

window.KENT  = window.KENT || {};
window.KENT.settings = window.KENT.settings || {};
window.KENT.settings.home_url = window.KENT.settings.home_url || 'https:\/\/www.kent.ac.uk';
window.KENT.settings.api_url = window.KENT.settings.api_url || 'https:\/\/api.kent.ac.uk\/api';

window.KENT.settings.breakpoints = window.KENT.settings.breakpoints || {
	'sm':   576,
	'md':   720,
	'lg':   940,
	'xl':   1140,
	'xxl':  1140,
	'xxxl': 1140
};

// @see https://github.com/unikent/kent-bar
window.KENT.kentbar = window.KENT.kentbar || {
	config:{
		target:'#kentBar',
		render:false,
		components: [
			'student',
			'staff',
			'departments',
			'alumni'
		],
		styles:{
			kentfont:false,
			fonts:false,
			base:false
		}
	}
};
