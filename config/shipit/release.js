var path = require( 'path' );

module.exports = function( shipit ) {
	var project = require( path.join( process.cwd(), 'package.json' ) ),
		archiveFile = project.name + '-' + project.version + '.zip',
		releasePath = shipit.config.releasesPath + project.name + '/' + archiveFile;

	shipit.log( 'Copying copy "dist/%s" to "%s"', archiveFile, releasePath );

	return shipit.local( 'scp dist/' + archiveFile + ' ' + shipit.config.servers + ':' + releasePath );
};
