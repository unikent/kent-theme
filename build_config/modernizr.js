module.exports = {
	build: {
		devFile: "vendor/modernizr/modernizr.js",
		outputFile: "public/assets/js/modernizr.min.js",
		files: {
			"src": [
				["public/assets/js/main.js"],
				["public/assets/css/main.css"]
			]
		},
		extensibility: [
			"html5printshiv",
			"html5shiv"
		],
		uglify: true,
		parseFiles: true
	}
};
