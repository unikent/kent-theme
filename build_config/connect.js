const exec = require('child_process').exec;
String.prototype.endsWith = function(suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
module.exports = {
	theme: {
		options: {
			port: 8888,
			hostname: '*',
			base: 'public',
			middleware: function(connect, options, middlewares) {
				middlewares.unshift(function(req, res, next) {
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', '*');
					next();
				});

				return middlewares;
			}
		}
	},
	sandbox: {
		options: {
			port: 8080,
			hostname: '*',
			base: 'sandbox',
			middleware: function(connect, options, middlewares) {
				var directory = options.directory || options.base[options.base.length - 1];
				if (!Array.isArray(options.base)) {
					options.base = [options.base];
				}

				// Magic happens here
				middlewares.unshift(function(req, res, next) {
					if(req.url.endsWith('.php')) {
						exec('php ' + directory + req.url,
							function (error, stdout, stderr){
								if(error) {
									console.error(stderr);
								}
								res.write(stdout);
								res.end();
							});
					} else {
						// No .php file? Moving on ...
						next();
					}
				});
				return middlewares;
			}
		}
	}
};
