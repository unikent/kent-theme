module.exports = {
	bootstrap: {
		src:[
			"vendor/bootstrap/js/dist/util.js",
			"vendor/bootstrap/js/dist/alert.js",
			"vendor/bootstrap/js/dist/button.js",
			//"vendor/bootstrap/js/dist/carousel.js",
			"vendor/bootstrap/js/dist/collapse.js",
			"vendor/bootstrap/js/dist/dropdown.js",
			"vendor/bootstrap/js/dist/modal.js",
			"vendor/bootstrap/js/dist/scrollspy.js",
			"vendor/bootstrap/js/dist/tab.js",
			"vendor/bootstrap/js/dist/tooltip.js",
			"vendor/bootstrap/js/dist/popover.js"
		],
		dest: "js/_bootstrap.js"
	},
	main: {
		files: {
			"public/assets/js/main.min.js" : "js/main.js"
		}
	}
};
