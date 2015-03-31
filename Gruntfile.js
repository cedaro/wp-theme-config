/*jshint node:true */

var config = require( './index' )();

module.exports = function( grunt ) {
	'use strict';

	grunt.initConfig({

		jshint: {
			options: {
				jshintrc: config.paths.global.config + '/.jshintnoderc'
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
