module.exports = function( grunt, options ) {
	if ( ! grunt.file.exists( options.paths.less + '/plugins/easy-digital-downloads.less' ) ) {
		return;
	}

	return {
		cssjanus: {
			src: '<%= paths.css %>/easy-digital-downloads.css',
			dest: '<%= paths.css %>/easy-digital-downloads-rtl.css'
		},
		less: {
			src: '<%= paths.less %>/plugins/easy-digital-downloads.less',
			dest: '<%= paths.css %>/easy-digital-downloads.css'
		},
		pixrem: {
			src: '<%= paths.css %>/easy-digital-downloads.css',
			dest: '<%= paths.css %>/easy-digital-downloads.css'
		},
		postcss: {
			src: [ '<%= paths.css %>/easy-digital-downloads.css' ]
		},
		watch: {
			files: [
				'<%= paths.less %>/plugins/easy-digital-downloads.less',
				'<%= paths.less %>/plugins/easy-digital-downloads/*.less',
				'<%= paths.less %>/plugins/easy-digital-downloads/**/*.less'
			],
			tasks: [ 'less:easy-digital-downloads' ]
		},
		wpcss: {
			src: '<%= paths.css %>/easy-digital-downloads.css',
			dest: '<%= paths.css %>/easy-digital-downloads.css'
		}
	};
};
