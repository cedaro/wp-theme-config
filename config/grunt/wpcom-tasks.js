module.exports = function( grunt, options ) {
	var theme = {
		less: {
			files: [
				{
					src: '<%= paths.less %>/wpcom.less',
					dest: '<%= paths.wpcom %>/style.css'
				},
				{
					src: '<%= paths.less %>/style-wpcom.less',
					dest: '<%= paths.wpcom %>/style.css'
				}
			]
		},
		postcss: {
			src: [
				'<%= paths.wpcom %>/style.css'
			]
		},
		rtlcss: {
			files: [
				{
					src: '<%= paths.wpcom %>/style.css',
					dest: '<%= paths.wpcom %>/style-rtl.css'
				}
			]
		},
		wpcss: {
			files: [
				{
					src: '<%= paths.wpcom %>/style.css',
					dest: '<%= paths.wpcom %>/style.css'
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
			theme.postcss.src.push( '<%= paths.wpcom %>/assets/css/' + filename + '.css' );

			theme.less.files.push({
				src: '<%= paths.less %>/' + filename + '.less',
				dest: '<%= paths.wpcom %>/assets/css/' + filename + '.css'
			});

			theme.pixrem.files.push({
				src: '<%= paths.wpcom %>/assets/css/' + filename + '.css',
				dest: '<%= paths.wpcom %>/assets/css/' + filename + '.css'
			});

			theme.rtlcss.files.push({
				src: '<%= paths.wpcom %>/assets/css/' + filename + '.css',
				dest: '<%= paths.wpcom %>/assets/css/' + filename + '-rtl.css'
			});

			theme.wpcss.files.push({
				src: '<%= paths.wpcom %>/assets/css/' + filename + '.css',
				dest: '<%= paths.wpcom %>/assets/css/' + filename + '.css'
			});
		}
	} );

	if ( grunt.file.exists( options.paths.source + '/assets/fonts/Genericons.svg' ) ) {
		theme.lineending = {
			files: {
				'': '<%= paths.wpcom %>/assets/fonts/Genericons.svg'
			}
		};
	}

	return theme;
};
