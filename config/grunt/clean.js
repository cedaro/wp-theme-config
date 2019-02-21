module.exports = {
	package: {
		src: [ '<%= paths.tmp %>' ]
	},
	wpcom: {
		src: [
			'<%= paths.wpcom %>/*',
			'!<%= paths.wpcom %>/.svn',
			'!<%= paths.wpcom %>/inc',
			'!<%= paths.wpcom %>/includes',
			'<%= paths.wpcom %>/includes/*',
			'!<%= paths.wpcom %>/includes/plugins',
			'<%= paths.wpcom %>/includes/plugins/*',
			'!<%= paths.wpcom %>/includes/plugins/jetpack-pro',
			'!<%= paths.wpcom %>/languages'
		]
	}
};
