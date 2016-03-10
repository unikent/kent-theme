/**
 * Social sharing icons
 *
 * Converts anything in a div with the class `content-social-share` in to a social sharing icon.
 * Clicking the icons will launch a share this page window. 
 * Will automatically pass share data to Google Analytics.
 *
 * @uses https://github.com/sapegin/social-likes
 */
(function(){

	// Add additional social networks to the social-likes code.
	window.socialLikesButtons = {

		// Add linkedin support 
		linkedin: {
			counterUrl: 'http://www.linkedin.com/countserv/count/share?url={url}',
			counter: function(jsonUrl, deferred) {
				var options = socialLikesButtons.linkedin;
				if (!options._) {
					options._ = {};
					if (!window.IN){
						window.IN = {Tags: {}};
					} 
					window.IN.Tags.Share = {
						handleCount: function(params) {
							var jsonUrl = options.counterUrl.replace(/{url}/g, encodeURIComponent(params.url));
							options._[jsonUrl].resolve(params.count);
						}
					};
				}
				options._[jsonUrl] = deferred;
				$.getScript(jsonUrl).fail(deferred.reject);
			},
			popupUrl: 'http://www.linkedin.com/shareArticle?mini=false&url={url}&title={title}',
			popupWidth: 650,
			popupHeight: 500
		}
	};

	// When jQuery is ready, hook up our social sharing icons.
	$(function() {
		// for all social share containers
		var $likes = $(".content-social-share");
		if ($likes.length > 0) {

			// Init social likes on container + grab options
			var options = $likes.socialLikes({"counters": false}).data().socialLikes.options;

			// Populate "email link" (Additional option we have added)
			$likes.find("a.email").attr("href", "mailto:?subject=" + options.title + "&body=Link: " + options.url);

			// Hook up social events via KAT
			$likes.find("a").click(function(){
				window.KENT.kat.social($(this).attr('title'), 'share'); // current url is used, if no url is provided as the 3rd param.
			});
		}
		// Debug
		window.KENT.log("Initiating: Social Sharing");
		window.KENT.log($likes);
	});
})();
