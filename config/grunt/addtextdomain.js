module.exports = {
	options: {
		textdomain: '<%= package.name %>'
	},
	package: {
		options: {
			updateDomains: [ 'all' ]
		},
		expand: true,
		src: [
			'<%= paths.tmp %>/*.php',
			'<%= paths.tmp %>/**/*.php'
		]
	},
	wpcom: {
		options: {
			updateDomains: [ 'all' ]
		},
		expand: true,
		src: [
			'<%= paths.wpcom %>/*.php',
			'<%= paths.wpcom %>/**/*.php'
		]
	}
};
