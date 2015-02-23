module.exports = {
	options: {
		textdomain: '<%= package.name %>'
	},
	build: {
		options: {
			updateDomains: ['all']
		},
		expand: true,
		src: [
			'<%= paths.build %>/*.php',
			'<%= paths.build %>/**/*.php'
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
}
