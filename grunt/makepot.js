module.exports = {
	build: {
		options: {
			cwd: '<%= paths.source %>',
			exclude: [
				'includes/back-compat\.php'
			],
			potHeaders: {
				'language': 'en',
				'plural-forms': 'nplurals=2; plural=(n != 1);',
				'poedit': true,
				'report-msgid-bugs-to': 'https://audiotheme.com/support/'
			},
			type: 'wp-theme'
		}
	}
}
