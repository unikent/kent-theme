module.exports = function(grunt) {

	require('dotenv').load();
	require('time-grunt')(grunt);

	// Load configs
	var initConfig = require('./build_config/get-config.js')(grunt);
	grunt.initConfig(initConfig);

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-sass-lint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-cssnano');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-php2html');
	grunt.loadNpmTasks('grunt-metalsmith');
	grunt.loadNpmTasks('grunt-contrib-handlebars');


	// Common tasks
	grunt.registerTask('build_js', ['handlebars', 'concat:bootstrap', 'concat:vendor', 'concat:main', 'babel',  'concat:build', 'copy:mainjs']);

	// Define tasks
	grunt.registerTask('development', [ 'eslint', 'build_js', 'copy:kentfont', 'copy:fonts', 'sass', 'postcss', 'patterns_local']);
	grunt.registerTask('production', [ 'eslint', 'build_js', 'uglify:main', 'copy:kentfont', 'copy:fonts', 'sass', 'postcss', 'cssnano', 'modernizr', 'patterns']);
	grunt.registerTask('patterns', [ 'php2html:production', 'metalsmith:production' ]);
	grunt.registerTask('patterns_local', [ 'php2html:development', 'metalsmith:development' ]);

	grunt.registerTask('default', [ 'development' ]);
};
