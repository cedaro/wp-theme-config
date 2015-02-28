/*jshint node:true */

module.exports = function( grunt ) {
	'use strict';

	var config = require( './index' )();

	grunt.initConfig({

		jshint: {
			options: {
				jshintrc: config.paths.global.config + '/.jshintrcnode'
			},
			all: [
				'index.js',
				'config/**/*.js'
			]
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.registerTask( 'default', [ 'jshint' ] );

};
