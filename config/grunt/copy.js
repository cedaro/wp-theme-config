module.exports = {
	package: {
		files: [
			{
				cwd: '<%= paths.source %>',
				src: [
					'**',
					'!<%= paths.js %>/source/**',
				],
				dest: '<%= paths.tmp %>',
				expand: true
			}
		]
	}
};
