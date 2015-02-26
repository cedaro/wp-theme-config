module.exports = function() {
	return {
		paths: {
			assets:  'assets',
			config:  'config',
			css:     'src/assets/css',
			dist:    'dist',
			grunt:   'config/grunt',
			js:      'src/assets/js',
			less:    'assets/less',
			logs:    'logs',
			reports: 'reports',
			source:  'src',
			tmp:     'tmp',
			wpcom:   'wpcom',
			global: {
				config: require( 'path' ).join( __dirname, 'config' ),
				grunt:  require( 'path' ).join( __dirname, 'config/grunt' )
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
