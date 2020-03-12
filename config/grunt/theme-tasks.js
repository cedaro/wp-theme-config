module.exports = function( grunt, options ) {
	var theme = {
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
		rtlcss: {
			files: [
				{
					src: '<%= paths.source %>/style.css',
					dest: '<%= paths.source %>/style-rtl.css'
				}
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

	[
		'block-editor',
		'editor-style',
		'editor-style-block',
		'editor-style-classic'
	].forEach( function( filename ) {
		if ( grunt.file.exists( options.paths.less + '/' + filename + '.less' ) ) {
			theme.postcss.src.push( '<%= paths.css %>/' + filename + '.css' );

			theme.less.files.push({
				src: '<%= paths.less %>/' + filename + '.less',
				dest: '<%= paths.css %>/' + filename + '.css'
			});

			theme.pixrem.files.push({
				src: '<%= paths.css %>/' + filename + '.css',
				dest: '<%= paths.css %>/' + filename + '.css'
			});

			theme.rtlcss.files.push({
				src: '<%= paths.css %>/' + filename + '.css',
				dest: '<%= paths.css %>/' + filename + '-rtl.css'
			});

			theme.wpcss.files.push({
				src: '<%= paths.css %>/' + filename + '.css',
				dest: '<%= paths.css %>/' + filename + '.css'
			});
		}
	} );

	return theme;
};
