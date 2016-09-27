window.KENT = window.KENT || {};

(function(){

	window.KENT.loadmore = {
		config: {
			blogs : {
				source: function($target, config){
					return window.KENT.settings.api_url +  '/v1/blogs/' + $target.data('blog');
				}
			},
			news : {
				source: window.KENT.settings.api_url +  '/v1/news'
			},
			events : {
				template: Handlebars.templates['event_card'],
				source: function($target, config){
					var cal = $target.data('calendar') || 'central';
					return window.KENT.settings.api_url +  '/v1/calendar/' + cal + '/event/start/' + moment().format('YYYY-MM-DD');
				},
				getRequestUrl : function(loadmore){
					return loadmore.source + '/offset/' + (loadmore.page * loadmore.pageSize) + '/limit/' + loadmore.pageSize;
				},
				parseResponse : function($data, loadmore){

					var $items = [];


					if (typeof $data !== 'undefined' && $data.length > 0){
						$.each($data, function(index, item){
							$items.push(loadmore.prepModel(item, loadmore));
						});
					}
					return $items;
				},
				prepModel : function(item, loadmore){
					var start = moment(item.start);
					var end = moment(item.end);
					return {
						title : item.title,
						subtitle: item.subtitle,
						series_title : item.series_title,
						start : start.format('Do MMM YYYY HH:mm'),
						start_ts : start.unix(),
						start_date : start.format('Do MMM YYYY'),
						start_time : start.format('HH:mm'),
						end : end.format('Do MMM YYYY HH:mm'),
						end_ts : end.unix(),
						end_date : end.format('Do MMM YYYY'),
						end_time : end.format('HH:mm'),
						all_day: item.all_day,
						excerpt: window.KENT.loadmore.utils.prepExcerpt(item.description, loadmore.excerptLength),
						url: item.url
					};
				}
			},
			default: {
				excerptLength:150,
				template: Handlebars.templates['wp_post_card'],
				btnSelector: '.loadmore-btn',
				containerSelector: '.loadmore-container',
				loaderSelector: '.loadmore-loader',
				loadMore:function(e){
					var $target = $(this).closest('.has-loadmore');
					if ($target.length > 0) {
						var loadmore = $target[0].loadmore;

						loadmore.loader.prop('hidden', false);
						loadmore.btns.prop('disabled', true);
						$target.addClass('loadmore-loading');

						var url = loadmore.getRequestUrl(loadmore);
						$.ajax(url, {
							success: function($data){
								if (loadmore.processResponse(loadmore, $data)) {
									$target[0].loadmore.page++;
								}
							},
							complete:function(){
								loadmore.loader.prop('hidden', true);
								loadmore.btns.prop('disabled', false);
								$target.removeClass('loadmore-loading');
							}
						});
					}
				},
				getRequestUrl : function(loadmore){
					return loadmore.source + '/page/' + (loadmore.page + 1) + '/posts_per_page/' + loadmore.pageSize;
				},
				parseResponse : function($data, loadmore){

					var $items = [];

					var $posts = $data['posts'];

					if ($data['http_status'] && $data['http_status'] !== 200){
						return false;
					}

					if (typeof $posts !== 'undefined' && $posts.length > 0){
						$.each($posts, function(index, item){
							$items.push(loadmore.prepModel(item, loadmore));
						});
					}
					return $items;
				},
				prepModel : function(item, loadmore){

					var image = false;
					var video = false;


					if (item.featured_video && item.featured_video !== '') {
						var re = /^https?:\/\/(?:youtu\.be|(?:www\.|m\.)?youtube\.com)\/?(?:watch|embed)?(?:.*?v=|v\/|\/)([\w-]+)/ig;
						var match = re.exec(item.featured_video);
						if (match.length >= 2) {
							video = match[1];
						}
					}

					if (item.featured_image === '' || item.featured_image === false || typeof item.featured_image === 'undefined') {
						if (item.default_image !== '' && item.default_image !== false && typeof item.default_image !== 'undefined') {
							image = window.KENT.loadmore.utils.prepWPImage(item.default_image);
						}
					} else {
						image = window.KENT.loadmore.utils.prepWPImage(item.featured_image);
					}

					return {
						title : item.title,
						excerpt: window.KENT.loadmore.utils.prepExcerpt(item.excerpt, loadmore.excerptLength),
						date_string: moment(item.date).format('Do MMMM YYYY'),
						date: item.date,
						url: item.permalink,
						image: image,
						video: video
					};
				},
				processResponse : function(loadmore, $data){
					var items = loadmore.parseResponse($data, loadmore);

					if (!items){
						return false;
					}

					var html = '';
					for (var i = 0; i < items.length; i++) {
						html += loadmore.template(items[i]);
					}

					loadmore.container.append(html);

					if (items.length === 0 || items.length < loadmore.pageSize) {
						loadmore.btns.prop('hidden', true);
					}

					return true;
				}
			}
		},
		getConfig : function($target){
			var conf = window.KENT.loadmore.config[$target.data('loadmore')];
			if (conf) {
				return $.extend({}, window.KENT.loadmore.config.default, conf);
			}
			return false;
		},
		init: function($target){

			var config = window.KENT.loadmore.getConfig($target);
			if (config){
				var loadmore = config;
				loadmore.btns = $target.find(config.btnSelector);
				loadmore.container = $target.find(config.containerSelector);
				loadmore.loader = $target.find(config.loaderSelector);
				if (loadmore.btns.length === 0 ){
					window.KENT.log('loadmore button missing', $target);
					return false;
				}
				if (loadmore.container.length === 0 ){
					window.KENT.log('loadmore container missing', $target);
					return false;
				}
				loadmore.source = $target.data('loadmore-source') || config.source;
				if (typeof loadmore.source === 'function'){
					loadmore.source = loadmore.source($target, config);
				}
				if (typeof loadmore.source === 'undefined' ){
					window.KENT.log('Undefined loadmore source', $target);
					return false;
				}
				loadmore.preLoad = ( $target.data('loadmore-preload') || false);
				loadmore.page = parseInt($target.data('loadmore-page'), 10) || (loadmore.preLoad ? 0 : 1);
				loadmore.pageSize = parseInt($target.data('loadmore-page-size'), 10) || 4;

				loadmore.btns.click(config.loadMore);

				$target.addClass('has-loadmore');
				$target[0].loadmore = loadmore;

				if (loadmore.preLoad){
					loadmore.btns.first().trigger('click');
				}

			} else {
				window.KENT.log('Undefined loadmore config "' + $(this).data('loadmore-config') + '"', $target);
			}
		},
		utils:{
			prepWPImage: function(src){
				var img = {
					alt: src.title,
					attribution : src.attribution
				};
				if (typeof src.sizes === 'undefined'){
					return false;
				}
				if (typeof src.sizes.medium === 'object'){
					img.src = src.sizes.medium.url;
				} else if (typeof src.sizes.large === 'object'){
					img.src = src.sizes.medium.url;
				} else if (typeof src.sizes.full === 'object'){
					img.src = src.sizes.medium.url;
				} else {
					return false;
				}
				return img;
			},
			prepExcerpt : function (excerpt, maxLength) {
				var ellipse = '&hellip;';
				var out = excerpt.replace(/<a[^>]*?>Read&nbsp;more<\/a>/ig, '').replace(/(<([^>]+)>)/ig, '').trim();

				if (out.substr(out.length - ellipse.length) === ellipse){
					out = out.substr(0, out.length - ellipse.length).trim();
				}

				if (out.length <= maxLength ){
					out += (out.substr(out.length - 1).match(/[\.!\?]+/gi) ? '' : ellipse);
					return out;
				}

				var index = Math.max(out.lastIndexOf(' '), out.lastIndexOf(','));

				while ((index + ellipse.length) > maxLength){
					var tmp = out.substr(0, index).trim();
					index = Math.max(tmp.lastIndexOf(' '), tmp.lastIndexOf(','));
				}

				if (index > 0 ){
					out = out.substr(0, index).trim();
				} else {
					out = out.substr(0, maxLength - ellipse.length).trim();
				}

				out += (out.substr(out.length - 1).match(/[\.!\?]+/gi) ? '' : ellipse);

				return out;
			}
		}
	};

	$('div[data-loadmore]').each(function(){
		window.KENT.loadmore.init($(this));
	});

})();
