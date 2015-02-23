module.exports = {
	build: {
		options: {
			browsers: [ '> 1%', 'last 2 versions', 'ff 17', 'opera 12.1', 'android 4' ]
		},
		src: [
			'<%= paths.source %>/style.css',
			'<%= paths.css %>/easy-digital-downloads.css',
			'<%= paths.css %>/editor-style.css',
			'<%= paths.css %>/color-schemes.css',
			'<%= paths.css %>/woocommerce.css'
		]
	}
}
