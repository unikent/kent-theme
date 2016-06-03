module.exports = {
	build: {
		options: {
			configFile: 'build_config/_eslint_build.json'
		},
		src: [
			'build_config/*.js',
			'Gruntfile.js'
		]
	},
	app: {
		options: {
			configFile: 'build_config/_eslint_app.json'
		},
		src: [
			'js/*.js',
			'js/**/*.js',
			'!js/_*.js',
			'!js/main.js',
			'!js/handlebars_templates.js'
		]
	}
};
