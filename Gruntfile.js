module.exports = function(grunt) {
    grunt.initConfig({

        copy: {
            fonts: {
                expand:true,
                cwd: 'vendor/kent-font/public/fonts/',
                src: '**',
                dest: 'dist/fonts/'
            },
            mainjs: {
                src: 'js/main.js',
                dest: 'dist/js/main.js'
            },
        },

        sass: {
            dist : {
                files: {
                    'dist/css/main.css' : 'scss/master.scss'
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
                    'dist/js/main.min.js' : 'js/main.js'
                }
            }
        },

        concat: {
            main: {
                src:[
                    'vendor/jquery/dist/jquery.js',
                    'js/_bootstrap.js',
                    'js/components/foo.js'
                ],
                dest: 'js/main.js'
            }
        },

        modernizr: {
            build: {
                devFile: 'vendor/modernizr/modernizr.js',
                outputFile: 'dist/js/modernizr.min.js',
                files: {
                    'src': [
                        ['dist/js/main.js'],
                        ['dist/css/main.css']
                    ]
                },
                extra: {
                    shiv: false
                },
                uglify: true,
                parseFiles: true
            }
        },

        watch: {
            js: {
                files: [ 'js/*.js', 'js/**/*.js','!js/_*.js' ],
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
                'js/*.js',
                'js/**/*.js',
                '!js/_*.js',
                '!js/main.js'
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
                    //require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'dist/css/*.css'
            }
        },
        cssnano: {
            options: {
                sourcemap: false
            },
            dist: {
                files: {
                    'dist/css/main.min.css': 'dist/css/main.css'
                }
            }
        }
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

    // Define tasks
    grunt.registerTask('development', [ 'jshint', 'concat', 'uglify', 'copy', 'sass', 'postcss', 'cssnano' ]);
    grunt.registerTask('default', [ 'development', 'watch' ]);
};