var path        = require('path');
var Handlebars  = require('handlebars');

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

	switch (operator) {
		case '!=':
			return (v1 !== v2) ? options.fn(this) : options.inverse(this);
		case '==':
			return (v1 === v2) ? options.fn(this) : options.inverse(this);
		case '<':
			return (v1 < v2) ? options.fn(this) : options.inverse(this);
		case '<=':
			return (v1 <= v2) ? options.fn(this) : options.inverse(this);
		case '>':
			return (v1 > v2) ? options.fn(this) : options.inverse(this);
		case '>=':
			return (v1 >= v2) ? options.fn(this) : options.inverse(this);
		case '&&':
			return (v1 && v2) ? options.fn(this) : options.inverse(this);
		case '||':
			return (v1 || v2) ? options.fn(this) : options.inverse(this);
		default:
			return options.inverse(this);
	}
});

Handlebars.registerHelper('log', function(something) {
	console.log(something);
});

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
