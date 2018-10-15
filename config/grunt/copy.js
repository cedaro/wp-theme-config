module.exports = {
	package: {
		files: [
			{
				cwd: '<%= paths.source %>',
				src: [
					'**',
					'!<%= paths.js %>/source/**',
					'!includes/wpcom.php',
					'!**/wpcom-*',
					'!includes/wpcom/**'
				],
				dest: '<%= paths.tmp %>',
				expand: true
			}
		]
	},
	wpcom: {
		files: [
			{
				cwd: '<%= paths.source %>',
				src: [
					'**',
					'!<%= paths.js %>/source/**',
					'!audiotheme/**',
					'!includes/back-compat.php',
					'!includes/plugins/**',
					'includes/plugins/jetpack.php',
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
