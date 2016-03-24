module.exports = {
	options: {
		sourcemap: false
	},
	dist: {
		files: [
			{
				expand: true,     // Enable dynamic expansion.
				cwd: "public/assets/css/",      // Src matches are relative to this path.
				src: ["*.css"], // Actual pattern(s) to match.
				dest: "public/assets/css/",   // Destination path prefix.
				ext: ".min.css",   // Dest filepaths will have this extension.
				extDot: "first"   // Extensions in filenames begin after the first dot
			}
		]
	}
};
