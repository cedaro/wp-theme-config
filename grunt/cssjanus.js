module.exports = {
	options: {
		swapLtrRtlInUrl: false
	},
	build: {
		files: [
			{
				src: '<%= paths.css %>/editor-style.css',
				dest: '<%= paths.css %>/editor-style-rtl.css'
			},
			{
				src: '<%= paths.source %>/style.css',
				dest: '<%= paths.source %>/style-rtl.css'
			}
		]
	}
}
