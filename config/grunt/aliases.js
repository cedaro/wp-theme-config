var glob = require( 'glob' ),
	path = require( 'path' );

module.exports = function( grunt, options ) {
	var tasks = {
		'build:css': [
			'build:css:theme'
		],
		'build:css:theme': [
			'less:theme',
			'pixrem:theme',
			'postcss:theme',
			'wpcss:theme',
			'rtlcss:theme'
		],
		'build:css:plugins': [],
		'build:css:wpcom': [
			'less:wpcom',
			'pixrem:wpcom',
			'postcss:wpcom',
			'wpcss:wpcom',
			'rtlcss:wpcom'
		],
		'check': [
			'search:themeSlugs',
			'complexity:theme'
		],
		'package': [
			'check',
			'replace:functionsVersion',
			'replace:styleVersion',
			'build',
			'clean:package',
			'copy:package',
			'replace:templateHeader',
			'addtextdomain:package',
			'makepot:package',
			'compress:package',
			'clean:package'
		]
	};

	glob.sync( '*.less', {
		cwd: options.paths.less + '/plugins'
	}).forEach(function( file ) {
		var plugin = path.basename( file, '.less' );

		tasks['build:css:plugins:' + plugin ] = [
			'less:plugin_' + plugin,
			'pixrem:plugin_' + plugin,
			'postcss:plugin_' + plugin,
			'wpcss:plugin_' + plugin,
			'rtlcss:plugin_' + plugin
		];

		tasks['build:css:plugins'].push( 'build:css:plugins:' + plugin );
	});

	return tasks;
};
