module.exports = function( grunt, options ) {
	return {
		'default': [
			'build'
		],
		'build': [
			'jshint',
			'build:css'
		],
		'build:css': [
			'build:css:theme',
			'build:css:plugins'
		]
	}
};
