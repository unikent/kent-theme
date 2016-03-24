module.exports = {
	fonts: {
		expand:true,
		cwd: "vendor/kent-font/public/fonts/",
		src: "**",
		dest: "public/assets/fonts/"
	},
	mainjs: {
		src: "js/main.js",
		dest: "public/assets/js/main.js"
	},
	kentfont: {
		src: "vendor/kent-font/public/css/kentfont.css",
		dest: "public/assets/css/kentfont.css"
	}
};
