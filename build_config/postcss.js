module.exports = {
	options: {
		map: {
			inline:false
		},
		processors: [
			require('pixrem')(), // add fallbacks for rem units
			require('autoprefixer')({browsers: 'last 2 versions'}) // add vendor prefixes
		]
	},
	dist: {
		src: 'public/assets/css/*.css'
	}
};
