(function(){
	//add linkedin support (not included in current version of social-shares)
	window.socialLikesButtons = {
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
				$.getScript(jsonUrl)
					.fail(deferred.reject);
			},
			popupUrl: 'http://www.linkedin.com/shareArticle?mini=false&url={url}&title={title}',
			popupWidth: 650,
			popupHeight: 500
		}
	};

	$(function() {
		var $likes = $(".content-social-share");
		if ($likes.length > 0) {
			var options = $likes.socialLikes({"counters": false}).data().socialLikes.options;

			// Populate "email link"
			$likes.find("a.email").attr("href", "mailto:?subject=" + options.title + "&body=Link: " + options.url);

			// Hook up social events
			$likes.find("a").click(function(){
				window.KENT.kat.social($(this).attr('title'), 'share');
			});
		}
	});
})();
