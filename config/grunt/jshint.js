module.exports = {
	options: {
		jshintrc: '<%= paths.global.config %>/.jshintrc'
	},
	build: [
		'<%= paths.js %>/*.js',
		'!<%= paths.js %>/*.min.js',
		'!<%= paths.js %>/plugins.js',
		'!<%= paths.js %>/vendor/*.js'
	],
	grunt: {
		options: {
			jshintrc: '<%= paths.global.config %>/.jshintrcnode'
		},
		src: [ 'Gruntfile.js' ]
	}
};
