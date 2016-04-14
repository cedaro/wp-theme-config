module.exports = {
	options: {
		/*autoRename: false,
		preserveComments: true,
		preserveDirectives: true,
		swapLeftRightInUrl: false,
		swapLtrRtlInUrl: false,*/
		opts: {
			autoRename: false,
			clean: false,
			processUrls: { atrule: true, decl: false },
		},
		saveUnmodified: false,
		plugins: [
			{
				name: 'swap-themicons',
				priority: 10,
				directives: {
					control: {},
					value: []
				},
				processors: [
					{
						expr: /content/im,
						action: function( prop, value ) {
							var pattern, themicons;

							themicons = {
								'\\f201': '\\f202', // arrow-left
								'\\f202': '\\f201', // arrow-right
								'\\f205': '\\f206', // caret-left
								'\\f206': '\\f205', // caret-right
								'\\f209': '\\f20a', // chevron-left
								'\\f20a': '\\f209', // chevron-right
								'\\f150': '\\f154', // fast-forward
								'\\f154': '\\f150', // rewind
								'\\f155': '\\f156', // skip-ahead
								'\\f156': '\\f155'  // skip-back
							};

							pattern = new RegExp( '(' + Object.keys( themicons ).join( '|' ).replace( /\\/g, '\\\\' ) + ')', 'g' );

							return {
								prop: prop,
								value: value.replace( pattern, function( match ) {
									return themicons[ match ];
								})
							};
						}
					}
				]
			}
		]
	}
};
