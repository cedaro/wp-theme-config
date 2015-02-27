// https://github.com/vigetlabs/grunt-complexity
module.exports = {
	options: {
		breakOnErrors: false
	},
	theme: {
		src: [
			'<%= paths.js %>/{,*/}*.js'
		],
		exclude: [
			'<%= paths.js %>/plugins.js',
			'<%= paths.js %>/{,*/}*.min.js',
			'<%= paths.js %>/vendor/*.js',
		]
	}
};
