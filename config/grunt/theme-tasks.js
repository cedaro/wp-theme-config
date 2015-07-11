module.exports = function( grunt, options ) {
	var theme = {
		cssjanus: {
			files: [
				{
					src: '<%= paths.source %>/style.css',
					dest: '<%= paths.source %>/style-rtl.css'
				}
			]
		},
		less: {
			files: [
				{
					src: '<%= paths.less %>/style.less',
					dest: '<%= paths.source %>/style.css'
				}
			]
		},
		pixrem: {
			files: [
				{
					src: '<%= paths.source %>/style.css',
					dest: '<%= paths.source %>/style.css'
				}
			]
		},
		postcss: {
			src: [
				'<%= paths.source %>/style.css'
			]
		},
		wpcss: {
			files: [
				{
					src: '<%= paths.source %>/style.css',
					dest: '<%= paths.source %>/style.css'
				}
			]
		}
	};

	if ( grunt.file.exists( options.paths.less + '/editor-style.less' ) ) {
		theme.postcss.src.push( '<%= paths.css %>/editor-style.css' );

		theme.cssjanus.files.push({
			src: '<%= paths.css %>/editor-style.css',
			dest: '<%= paths.css %>/editor-style-rtl.css'
		});

		theme.less.files.push({
			src: '<%= paths.less %>/editor-style.less',
			dest: '<%= paths.css %>/editor-style.css'
		});

		theme.pixrem.files.push({
			src: '<%= paths.css %>/editor-style.css',
			dest: '<%= paths.css %>/editor-style.css'
		});

		theme.wpcss.files.push({
			src: '<%= paths.css %>/editor-style.css',
			dest: '<%= paths.css %>/editor-style.css'
		});
	}

	return theme;
};
