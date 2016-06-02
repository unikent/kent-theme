module.exports = {
	options: {
		sourceMap: true,
		presets: ['es2015'],
		compact: true
	},
	dist: {
		files: {
			'tmp/main.compiled.js': 'tmp/main.js'
		}
	}
};
