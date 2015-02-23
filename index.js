module.exports = function() {
	return {
		paths: {
			assets: 'assets',
			config: 'grunt/config',
			css:    'src/assets/css',
			dist:   'dist',
			js:     'src/assets/js',
			less:   'assets/less',
			logs:   'logs',
			source: 'src',
			tasks:  'grunt/tasks',
			tmp:    'tmp',
			wpcom:  'wpcom',
			global: {
				config: require( 'path' ).join( __dirname, 'grunt' )
			}
		},
		taskMap: {
			addtextdomain: 'grunt-wp-i18n',
			makepot:       'grunt-wp-i18n',
			replace:       'grunt-text-replace',
			wpcss:         'grunt-wp-css'
		}
	};
};
