module.exports = {
	package: {
		src: [ '<%= paths.tmp %>' ]
	},
	wpcom: {
		src: [
			'<%= paths.wpcom %>/*',
			'!<%= paths.wpcom %>/.svn',
			'!<%= paths.wpcom %>/includes',
			'<%= paths.wpcom %>/includes/*',
			'!<%= paths.wpcom %>/includes/wpcom',
			'!<%= paths.wpcom %>/languages'
		]
	}
};
