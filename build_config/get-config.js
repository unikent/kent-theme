module.exports = function (grunt) {
	'use strict';
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		copy: require('./copy'),
		sass: require('./scss'),
		uglify: require('./uglify'),
		concat: require('./concat'),
		modernizr: require('./modernizr'),
		watch: require('./watch'),
		eslint: require('./eslint'),
		sasslint: require('./sasslint'),
		postcss: require('./postcss'),
		cssnano: require('./cssnano'),
		php2html: require('./php2html'),
		metalsmith: require('./metalsmith'),
		handlebars: require('./handlebars'),
		babel: require('./babel')
	};
	return config;
};
