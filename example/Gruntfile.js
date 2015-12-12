/*jshint node:true */

module.exports = function( grunt ) {
	'use strict';

	var config = require( 'wp-theme-config' );
	require( 'load-project-config' )( grunt, config ).init();

};
