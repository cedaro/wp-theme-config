var path = require( 'path' );

module.exports = function( shipit ) {
	var package = require( path.join( process.cwd(), 'package.json' ) ),
		archiveFile = package.name + '-' + package.version + '.zip',
		releasePath = shipit.config.releasesPath + package.name + '/' + archiveFile;

	shipit.log( 'Copying copy "dist/%s" to "%s"', archiveFile, releasePath );

	return shipit.local( 'scp dist/' + archiveFile + ' ' + shipit.config.servers + ':' + releasePath );
};
