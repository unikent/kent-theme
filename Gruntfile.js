module.exports = function(grunt) {

	require("dotenv").load();
	require("time-grunt")(grunt);

	// Load configs
	var initConfig = require("./config/get-config.js")(grunt);
	grunt.initConfig(initConfig);

	// Load tasks
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-eslint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-cssnano");
	grunt.loadNpmTasks("grunt-postcss");
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks("grunt-php2html");
	grunt.loadNpmTasks("grunt-metalsmith");
	grunt.loadNpmTasks("grunt-contrib-handlebars");
	grunt.loadNpmTasks("grunt-subgrunt");

	// Define tasks
	grunt.registerTask("development", [ "eslint", "handlebars", "uglify:bootstrap", "concat", "copy", "sass", "postcss", "patterns_local"]);
	grunt.registerTask("production", [ "eslint", "handlebars", "uglify:bootstrap", "concat", "uglify:main", "copy", "sass", "postcss", "cssnano", "modernizr", "patterns"]);
	grunt.registerTask("jwplayer", [ "subgrunt:jwplayer"]);
	grunt.registerTask("default", [ "development" ]);
	grunt.registerTask("patterns", [ "php2html:production", "metalsmith:production" ]);
	grunt.registerTask("patterns_local", [ "php2html:development", "metalsmith:development" ]);
};
