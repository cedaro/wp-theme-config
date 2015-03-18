module.exports = {
	package: {
		options: {
			cwd: '<%= paths.tmp %>',
			exclude: [
				'includes/back-compat\.php'
			],
			potHeaders: {
				'language': 'en',
				'plural-forms': 'nplurals=2; plural=(n != 1);',
				'poedit': true,
				'report-msgid-bugs-to': 'https://audiotheme.com/support/'
			},
			processPot: function( pot ) {
				var translation,
					excluded_meta = [
						'Theme Name of the plugin/theme',
						'Theme URI of the plugin/theme',
						'Author of the plugin/theme',
						'Author URI of the plugin/theme'
					];

				for ( translation in pot.translations[''] ) {
					if ( 'undefined' !== typeof pot.translations[''][ translation ].comments.extracted ) {
						if ( excluded_meta.indexOf( pot.translations[''][ translation ].comments.extracted ) >= 0 ) {
							console.log( 'Excluded meta: ' + pot.translations[''][ translation ].comments.extracted );
							delete pot.translations[''][ translation ];
						}
					}
				}

				return pot;
			},
			type: 'wp-theme'
		}
	}
};
