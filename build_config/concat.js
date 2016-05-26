module.exports = {
	main: {
		src:[
			"node_modules/kent-bar/build/deploy/assets/app.js",
			"node_modules/jquery/dist/jquery.js",
			"node_modules/tether/dist/js/tether.js",
			"js/_bootstrap.js",
			"node_modules/responsive-bootstrap-toolkit/dist/bootstrap-toolkit.js",
			"node_modules/jquery.stellar/jquery.stellar.js",
			"node_modules/slick-carousel/slick/slick.js",
			"node_modules/handlebars/dist/handlebars.runtime.js",
			"node_modules/social-likes/src/social-likes.js",
			"node_modules/js-cookie/src/js.cookie.js",
			"js/handlebars_templates.js",
			"node_modules/jwplayer/bin-release/jwplayer.js",
			"node_modules/jwplayer/bin-release/polyfills.promise.js",
			"node_modules/jwplayer/bin-release/provider.youtube.js",
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
			"js/components/slider.js",
			"js/components/video.js",
			"js/components/social-likes.js",
			"js/components/navigation.js",
			"js/components/paralax.js" //parallax last as it needs page to be rendered correctly (especially sliders)
		],
		dest: "js/main.js"
	}
};
