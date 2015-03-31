module.exports = {
	options: {
		config: '<%= paths.global.config %>/.jscsrc'
	},
	check: {
		files: {
			src: [
				'<%= paths.js %>/*.js',
				'!<%= paths.js %>/*.min.js'
			]
		}
	}
};
