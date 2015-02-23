module.exports = {
	package: {
		files: [
			{
				cwd: '<!= paths.source %>',
				src: [
					'**',
					'!<%= paths.js %>/source/**',
					'!includes/wpcom.php'
				],
				dest: '<%= paths.tmp %>',
				expand: true
			}
		]
	},
	wpcom: {
		files: [
			{
				cwd: 'src',
				src: [
					'**',
					'!<%= paths.js %>/source/**',
					'!includes/back-compat.php',
					'!includes/plugins/**',
					'!includes/vendor/class-audiotheme-themenotice.php',
					'!includes/wporg.php',
					'!languages/**'
				],
				dest: '<%= paths.wpcom %>',
				expand: true
			}
		]
	}
};
