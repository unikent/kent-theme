module.exports = function(grunt) {

	require('dotenv').load();
	require('time-grunt')(grunt);

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

	Handlebars.registerHelper("log", function(something) {
		console.log(something);
	});


	grunt.initConfig({

		copy: {
			fonts: {
				expand:true,
				cwd: 'vendor/kent-font/public/fonts/',
				src: '**',
				dest: 'public/assets/fonts/'
			},
			mainjs: {
				src: 'js/main.js',
				dest: 'public/assets/js/main.js'
			},
			kentfont: {
				src: 'vendor/kent-font/public/css/kentfont.css',
				dest: 'public/assets/css/kentfont.css'
			}
		},

		sass: {
			dist : {
				files: {
					'public/assets/css/main.css' : 'scss/master.scss',
					'public/assets/css/main_postgraduate.css' : 'scss/master_postgraduate.scss'
				}
			}
		},

		uglify: {
			bootstrap: {
				src:[
					'vendor/bootstrap/js/dist/util.js',
					'vendor/bootstrap/js/dist/alert.js',
					'vendor/bootstrap/js/dist/button.js',
					//'vendor/bootstrap/js/dist/carousel.js',
					'vendor/bootstrap/js/dist/collapse.js',
					'vendor/bootstrap/js/dist/dropdown.js',
					'vendor/bootstrap/js/dist/modal.js',
					'vendor/bootstrap/js/dist/scrollspy.js',
					'vendor/bootstrap/js/dist/tab.js',
					'vendor/bootstrap/js/dist/tooltip.js',
					'vendor/bootstrap/js/dist/popover.js'
				],
				dest: 'js/_bootstrap.js'
			},
			main: {
				files: {
					'public/assets/js/main.min.js' : 'js/main.js'
				}
			}
		},

		concat: {
			main: {
				src:[
					'vendor/jquery/dist/jquery.js',
					'vendor/tether/dist/js/tether.js',
					'js/_bootstrap.js',
					'vendor/responsive-bootstrap-toolkit/dist/bootstrap-toolkit.js',
					'vendor/jquery.stellar/src/jquery.stellar.js',
					'vendor/slick-carousel/slick/slick.js',
					'vendor/handlebars/handlebars.runtime.js',
					'node_modules/social-likes/src/social-likes.js',
					'vendor/js-cookie/src/js.cookie.js',
					'js/handlebars_templates.js',
					'vendor/quick-spot/quickspot.js',
					'vendor/jwplayer-official/bin-release/jwplayer.js',
					'vendor/jwplayer-official/bin-release/provider.youtube.js',
					'js/components/log.js',
					'js/components/kat.js',
					'js/components/responsive_util.js',
					'js/components/quickspot.js',
					'js/components/collapse_responsive.js',
					'js/components/global_nav.js',
					'js/components/global_search.js',
					'js/components/primary_nav.js',
					'js/components/sectional_nav.js',
					'js/components/beta_bar.js',
					'js/components/attribution.js',
					'js/components/embeds.js',
					'js/components/paralax.js',
					'js/components/slider.js',
					'js/components/video.js',
					'js/components/social-likes.js',
					'js/components/navigation.js'
				],
				dest: 'js/main.js'
			}
		},

		modernizr: {
			build: {
				devFile: 'vendor/modernizr/modernizr.js',
				outputFile: 'public/assets/js/modernizr.min.js',
				files: {
					'src': [
						['public/assets/js/main.js'],
						['public/assets/css/main.css']
					]
				},
				extensibility: [
					"html5printshiv",
					"html5shiv"
				],
				uglify: true,
				parseFiles: true
			}
		},

		watch: {
			js: {
				files: [ 'js/*.js', 'js/**/*.js','!js/_*.js', 'js/templates/*.hbs' ],
				tasks: [ 'jshint', 'handlebars', 'concat', 'copy:mainjs', 'uglify:main' ]
			},
			sass: {
				files: [ 'scss/*.scss','scss/**/*.scss'  ],
				tasks: [ 'sass', 'postcss' ]
			},
			patterns: {
				files: ['patterns/**/*.html'],
				tasks: ['patterns_local']
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'js/*.js',
				'js/**/*.js',
				'!js/_*.js',
				'!js/main.js',
				'!js/handlebars_templates.js'
			]
		},
		postcss: {
			options: {
				map: {
					inline:false
				},

				processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
				]
			},
			dist: {
				src: 'public/assets/css/*.css'
			}
		},
		cssnano: {
			options: {
				sourcemap: false
			},
			dist: {
				files: [
					{
						expand: true,     // Enable dynamic expansion.
						cwd: 'public/assets/css/',      // Src matches are relative to this path.
						src: ['*.css'], // Actual pattern(s) to match.
						dest: 'public/assets/css/',   // Destination path prefix.
						ext: '.min.css',   // Dest filepaths will have this extension.
						extDot: 'first'   // Extensions in filenames begin after the first dot
					}
				]
			}
		},
		php2html: {
			production: {
				options:   {
					htmlhint:false,
					getData: {
						webroot: '//beta.kent.ac.uk/',
						api_url: 'https://api.kent.ac.uk/api/',
						debug: false
					}
				},
				files: [
					{expand:  true,
						cwd:  'lib/pattern-wrappers/',
						src:  ['*.php'],
						dest: 'lib/pattern-wrappers',
						ext:  '.html'
					}
				]

			},
			development:{
				options:   {
					htmlhint:false
				},
				files: [
					{expand:  true,
						cwd:  'lib/pattern-wrappers/',
						src:  ['*.php'],
						dest: 'lib/pattern-wrappers/dev',
						ext:  '.html'
					}
				]
			}
		},
		metalsmith: {
			production: {
				options: {
					metadata: {
						docsroot: '//beta.kent.ac.uk/patterns/',
						title: 'Pattern Library',
						description: 'A Pattern Library for the Kent Theme',
						section_names: {
							core_elements:'Core Elements',
							featured_content:'Featured Content',
							page_types:'Page Types'
						}
					},
					plugins: {
						'metalsmith-headings-identifier':{
							linkTemplate:"<!-- %s -->"
						},
						'metalsmith-headings':{},
						'metalsmith-navigation':{
							"navConfigs": {
								header:{
									filterProperty:false,
									sortBy:'nav_order'
								},
								all:{
									includeDirs: true,
									filterProperty:false,
									sortBy:'sub_title'
								},
								core_elements:{
									includeDirs: true,
									filterProperty:'section',
									sortBy:'nav_order'
								},
								featured_content:{
									includeDirs: true,
									filterProperty:'section',
									sortBy:'nav_order'
								},
								page_types:{
									includeDirs: true,
									filterProperty:'section',
									sortBy:'nav_order'
								}
							},
							"navSettings": {}
						},
						'metalsmith-layouts': {
							engine: 'handlebars',
							directory:'lib/pattern-wrappers',
							default:'content.html',
							partials:'lib/pattern-partials'
						}
						//'metalsmith-text-replace':{
						//	'**/**':{
						//		find: "../../examples/",
						//		replace: "../"
						//	}
						//}
					}
				},
				src: 'patterns',
				dest: 'public/docs'
			},
			development: {
				options: {
					metadata: {
						docsroot: process.env.WEBROOT + 'devdocs/',
						title: 'Pattern Library',
						description: 'A Pattern Library for the Kent Theme',
						section_names: {
							core_elements:'Core Elements',
							featured_content:'Featured Content',
							page_types:'Page Types'
						}
					},
					plugins: {
						'metalsmith-headings-identifier':{
							linkTemplate:"<!-- %s -->"
						},
						'metalsmith-headings':{},
						'metalsmith-navigation':{
							"navConfigs": {
								header:{
									filterProperty:false,
									sortBy:'nav_order'
								},
								all:{
									includeDirs: true,
									filterProperty:false,
									sortBy:'sub_title'
								},
								core_elements:{
									includeDirs: true,
									filterProperty:'section',
									sortBy:'nav_order'
								},
								featured_content:{
									includeDirs: true,
									filterProperty:'section',
									sortBy:'nav_order'
								},
								page_types:{
									includeDirs: true,
									filterProperty:'section',
									sortBy:'nav_order'
								}
							},
							"navSettings": {}
						},
						'metalsmith-layouts': {
							engine: 'handlebars',
							directory:'lib/pattern-wrappers/dev',
							default:'content.html',
							partials:'lib/pattern-partials'
						}

					}
				},
				src: 'patterns',
				dest: 'public/devdocs'
			}
		},
		handlebars: {
			compile: {
				options: {
					namespace: 'Handlebars.templates',
					processName: function(filePath) {
						return filePath.replace(/js\/templates\/(.+)\.hbs$/, '$1').split('/').join('.');
					}
				},
				files: {
					'js/handlebars_templates.js': ['js/templates/*.hbs']
				}
			}
			
		},
		subgrunt: {
			jwplayer: {
				// you can use this array to add parameters:
				'vendor/jwplayer-official': [ 'build-js' ]
			}
		},
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-cssnano');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-php2html');
	grunt.loadNpmTasks('grunt-metalsmith');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-subgrunt');

	// Define tasks
	grunt.registerTask('development', [ 'jshint', 'handlebars', 'uglify:bootstrap', 'concat', 'copy', 'sass', 'postcss','patterns_local']);
	grunt.registerTask('production', [ 'subgrunt', 'jshint', 'handlebars', 'uglify:bootstrap', 'concat', 'uglify:main', 'copy', 'sass', 'postcss', 'cssnano', 'modernizr','patterns']);
	grunt.registerTask('default', [ 'development' ]);
	grunt.registerTask('patterns', [ 'php2html:production','metalsmith:production' ]);
	grunt.registerTask('patterns_local', [ 'php2html:development','metalsmith:development' ]);
};
