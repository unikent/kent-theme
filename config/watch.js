module.exports = {
	js: {
		files: [ "js/*.js", "js/**/*.js", "!js/_*.js", "js/templates/*.hbs" ],
		tasks: [ "jshint", "handlebars", "concat", "copy:mainjs", "uglify:main" ]
	},
	sass: {
		files: [ "scss/*.scss", "scss/**/*.scss" ],
		tasks: [ "sass", "postcss" ]
	},
	patterns: {
		files: ["patterns/**/*.html"],
		tasks: ["patterns_local"]
	}
};
