module.exports = function(grunt) {

	grunt.initConfig({
		hologram: {
			generate: {
				options: {
					config: './hologram_config.yml'
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-hologram');

	grunt.registerTask('default', ['hologram']);

};
