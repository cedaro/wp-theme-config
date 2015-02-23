module.exports = {
	options: {
		rootvalue: '62.5%'
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
