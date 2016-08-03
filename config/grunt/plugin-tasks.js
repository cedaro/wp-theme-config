var _ = require( 'lodash' ),
	glob = require( 'glob' ),
	path = require( 'path' );

function generateConfig( plugin ) {
	var config = {};

	config['less__' +  plugin] = {
		src: '<%= paths.less %>/plugins/' + plugin + '.less',
		dest: '<%= paths.css %>/' + plugin + '.css'
	};


	config['pixrem__' +  plugin] = {
		src: '<%= paths.css %>/' + plugin + '.css',
		dest: '<%= paths.css %>/' + plugin + '.css'
	};

	config['postcss__' +  plugin] = {
		src: [ '<%= paths.css %>/' + plugin + '.css' ]
	};

	config['rtlcss__' +  plugin] = {
		src: '<%= paths.css %>/' + plugin + '.css',
		dest: '<%= paths.css %>/' + plugin + '-rtl.css'
	};

	config['watch__' +  plugin] = {
		files: [
			'<%= paths.less %>/plugins/' + plugin + '.less',
			'<%= paths.less %>/plugins/' + plugin + '/*.less',
			'<%= paths.less %>/plugins/' + plugin + '/**/*.less'
		],
		tasks: [ 'less:plugin_' + plugin ]
	};

	config['wpcss__' +  plugin] = {
		src: '<%= paths.css %>/' + plugin + '.css',
		dest: '<%= paths.css %>/' + plugin + '.css'
	};

	return config;
}

module.exports = function( grunt, options ) {
	var tasks = {};

	glob.sync( '*.less', {
		cwd: options.paths.less + '/plugins'
	}).forEach(function( file ) {
		var plugin = path.basename( file, '.less' ),
			config = generateConfig( plugin );

		_.merge( tasks, config );
	});

	return tasks;
};
