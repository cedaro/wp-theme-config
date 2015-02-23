module.exports = {
	options: {
		config: 'alphabetical',
	},
	build: {
		files: [
			{
				src: '<%= paths.css %>/editor-style.css',
				dest: '<%= paths.css %>/editor-style.css'
			},
			{
				src: '<%= paths.source %>/style.css',
				dest: '<%= paths.source %>/style.css'
			}
		]
	}
}
