module.exports = {
	production: {
		options: {
			htmlhint:false,
			getData: {
				webroot: 'https://beta.kent.ac.uk/pantheon/kent-theme-assets/',
				api_url: 'https://api.kent.ac.uk/api/',
				home_url: 'https://beta.kent.ac.uk/',
				debug: false
			}
		},
		files: [
			{expand:  true,
				cwd:  'lib/pattern-wrappers/',
				src:  ['*.php'],
				dest: 'lib/pattern-wrappers',
				ext:  '.html'
			}
		]

	},
	sandbox:{
		options:   {
			htmlhint:false
		},
		files: [
			{expand:  true,
				cwd:  'lib/pattern-wrappers/',
				src:  ['*.php'],
				dest: 'lib/pattern-wrappers/dev',
				ext:  '.html'
			}
		]
	}
};
