module.exports = {
	bootstrap: {
		src:[
			"node_modules/bootstrap/js/dist/util.js",
			"node_modules/bootstrap/js/dist/alert.js",
			"node_modules/bootstrap/js/dist/button.js",
			//"node_modules/bootstrap/js/dist/carousel.js",
			"node_modules/bootstrap/js/dist/collapse.js",
			"node_modules/bootstrap/js/dist/dropdown.js",
			"node_modules/bootstrap/js/dist/modal.js",
			"node_modules/bootstrap/js/dist/scrollspy.js",
			"node_modules/bootstrap/js/dist/tab.js",
			"node_modules/bootstrap/js/dist/tooltip.js",
			"node_modules/bootstrap/js/dist/popover.js"
		],
		dest: "tmp/bootstrap.js"
	},
	vendor: {
		src:[
			"node_modules/kent-bar/build/deploy/assets/app.js",
			"node_modules/jquery/dist/jquery.js",
			"node_modules/tether/dist/js/tether.js",
			"tmp/bootstrap.js",
			"node_modules/responsive-bootstrap-toolkit/dist/bootstrap-toolkit.js",
			"node_modules/jquery.stellar/jquery.stellar.js",
			"node_modules/slick-carousel/slick/slick.js",
			"node_modules/handlebars/dist/handlebars.runtime.js",
			"node_modules/social-likes/src/social-likes.js",
			"node_modules/js-cookie/src/js.cookie.js",
			"tmp/handlebars_templates.js",
			"node_modules/jwplayer/bin-release/jwplayer.js",
			"node_modules/jwplayer/bin-release/polyfills.promise.js",
			"node_modules/jwplayer/bin-release/provider.youtube.js",
		],
		dest: "tmp/vendor.js"
	},
	main: {
		src:[
			"js/components/log.js",
			"js/components/kat.js",
			"js/components/responsive_util.js",
			"js/components/quickspot.js",
			"js/components/collapse_responsive.js",
			"js/components/global_nav.js",
			"js/components/global_search.js",
			"js/components/primary_nav.js",
			"js/components/sectional_nav.js",
			"js/components/beta_bar.js",
			"js/components/attribution.js",
			"js/components/embeds.js",
			"js/components/paralax.js",
			"js/components/slider.js",
			"js/components/video.js",
			"js/components/social-likes.js",
			"js/components/navigation.js"
		],
		dest: "tmp/main.js"
	},
	build: {
		src:[
			"tmp/vendor.js",
			"tmp/main.compiled.js"
		],
		dest: "js/main.js"
	}
};
