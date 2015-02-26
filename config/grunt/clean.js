module.exports = {
	package: {
		src: [ '<%= paths.tmp %>' ]
	},
	wpcom: {
		src: [
			'<%= paths.wpcom %>/*',
			'!<%= paths.wpcom %>/.svn',
			'!<%= paths.wpcom %>/languages'
		]
	}
};
