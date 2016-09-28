(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['handlebars'], factory);
	} else if (typeof exports === 'object') {
		// Node, CommonJS-like
		module.exports = factory(require('handlebars'));
	} else {
		// Browser globals (root is window)
		window.Handlebars = factory(window.Handlebars);
	}
}(function (Handlebars) {
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

	Handlebars.registerHelper('log', function (something) {
		window.KENT.log(something);
	});

	return Handlebars;
}));
