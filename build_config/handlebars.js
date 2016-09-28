var path        = require('path');
var Handlebars  = require('../js/components/handlebars_helpers.js');

// actual handle bar logic
module.exports = {
	compile: {
		options: {
			namespace: 'Handlebars.templates',
			processName: function(filePath) {
				return filePath.replace(/js\/templates\/(.+)\.hbs$/, '$1').split('/').join('.');
			}
		},
		files: {
			'tmp/handlebars_templates.js': ['js/templates/*.hbs']
		}
	}
};
