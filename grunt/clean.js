module.exports = {
	build: {
		src: [ '<%= paths.build %>' ]
	},
	wpcom: {
		src: [
			'<%= paths.wpcom %>/*',
			'!<%= paths.wpcom %>/.svn',
			'!<%= paths.wpcom %>/languages'
		]
	}
}
