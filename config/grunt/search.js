module.exports = function( grunt, options ) {
	var themes,
		_ = require( 'lodash' );

	themes = _.chain( options.themes )
		.without( themes, options.package.name )
		.difference( options.excludeThemeSlugsFromSearch || [] )
		.value();

	return {
		/**
		 * Search for unapproved theme slugs.
		 */
		themeSlugs: {
			options: {
				searchString: new RegExp( themes.join( '|' ), 'g' ),
				failOnMatch: true,
				logFormat: 'console'
			},
			files: {
				src: [
					'<%= paths.source %>/**'
				]
			}
		}
	};
};
