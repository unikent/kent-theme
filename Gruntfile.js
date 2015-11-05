module.exports = function(grunt) {
	grunt.initConfig({

		copy: {
			fonts: {
				expand:true,
				cwd: 'vendor/kent-font/public/fonts/',
				src: '**',
				dest: 'dist/fonts/',
			},
		},
		sass: {
			dist : {
				files: {
					'dist/css/main.css' : 'scss/master.scss'
				}
			}
		},
		watch: {
			js: {
				files: [ 'js/*.js', 'js/**/*.js' ],
				tasks: [ 'jshint' ]
			},
			sass: {
				files: [ 'scss/*.scss','scss/**/*.scss'  ],
				tasks: [ 'sass' ]
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'js/**/*.js'
			]
		},
		postcss: {
			options: {
				map: false,

				processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
					//require('cssnano')() // minify the result
				]
			},
			dist: {
				src: 'dist/css/*.css'
			}
		},
		hologram: {
			generate: {
				options: {
					config: './hologram_config.yml'
				}
			}
		}
	});


	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-hologram');
	grunt.loadNpmTasks('grunt-postcss');

	// Define tasks
	grunt.registerTask('development', [ 'jshint', 'copy:fonts', 'sass', 'postcss', 'hologram']);
	grunt.registerTask('default', [ 'development', 'watch' ]);
};
