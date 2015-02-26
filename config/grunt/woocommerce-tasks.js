module.exports = function( grunt, options ) {
	if ( ! grunt.file.exists( options.paths.less + '/plugins/woocommerce.less' ) ) {
		return;
	}

	return {
		autoprefixer: {
			src: [ '<%= paths.css %>/woocommerce.css' ]
		},
		cssjanus: {
			src: '<%= paths.css %>/woocommerce.css',
			dest: '<%= paths.css %>/woocommerce-rtl.css'
		},
		less: {
			src: '<%= paths.less %>/plugins/woocommerce.less',
			dest: '<%= paths.css %>/woocommerce.css'
		},
		pixrem: {
			src: '<%= paths.css %>/woocommerce.css',
			dest: '<%= paths.css %>/woocommerce.css'
		},
		watch: {
			files: [
				'<%= paths.less %>/plugins/woocommerce.less',
				'<%= paths.less %>/plugins/woocommerce/*.less',
				'<%= paths.less %>/plugins/woocommerce/**/*.less'
			],
			tasks: [ 'less:woocommerce' ]
		},
		wpcss: {
			src: '<%= paths.css %>/woocommerce.css',
			dest: '<%= paths.css %>/woocommerce.css'
		}
	};
};
