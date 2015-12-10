var moment = require( 'moment' ),
	path = require( 'path' );

module.exports = function( shipit ) {
	var project = require( path.join( process.cwd(), 'package.json' ) );

	shipit.archiveFile = project.name + '-' + project.version + '.zip';
	shipit.deployPath = shipit.config.deployRoot + project.name + '/releases/';

	function createDeploymentPath() {
		return shipit.remote( 'mkdir -p ' + shipit.deployPath );
	}

	// @todo Throw an error if the package doesn't exist
	function copyProject() {
		return shipit.local( 'scp dist/' + shipit.archiveFile + ' ' + shipit.config.servers + ':' + shipit.deployPath );
	}

	function unpackDeployment() {
		var cmd = [];

		shipit.deployTime = moment().utc().format( 'YYYYMMDDHHmmss' );

		cmd.push( 'cd ' + shipit.deployPath );
		cmd.push( 'unzip -q ' + shipit.archiveFile );
		cmd.push( 'mv ' + project.name + ' ' + shipit.deployTime );
		cmd.push( 'rm ' + shipit.archiveFile );

		return shipit.remote( cmd.join( ' && ' ) );
	}

	// @link http://blog.endpoint.com/2009/09/using-ln-sf-to-replace-symlink-to.html
	function updateSymlink() {
		var cmd = [];

		cmd.push( 'cd ' + shipit.config.publicPath );
		cmd.push( 'ln -sn ' + shipit.deployPath + shipit.deployTime + ' ' + project.name + '-temp' );
		cmd.push( 'mv -T ' + project.name + '-temp ' + project.name );

		return shipit.remote( cmd.join( ' && ' ) );
	}

	// @link https://github.com/shipitjs/shipit-deploy/blob/9f0a94876becd1043c504fa2866df59d68e3c434/tasks/deploy/clean.js#L24
	function cleanOldReleases() {
		var cmd = '';

		// Alternative: cmd = 'rm -rf `ls -r | tail -n +6`';

		cmd += '(';
			cmd += 'ls -rd ' + shipit.deployPath + '*|head -n 5;';
			cmd += 'ls -d ' + shipit.deployPath + '*';
		cmd += ')';
		cmd += '|sort|uniq -u|xargs rm -rf';

		return shipit.remote( cmd );
	}

	return createDeploymentPath()
		.then( copyProject )
		.then( unpackDeployment )
		.then( updateSymlink )
		.then( cleanOldReleases );
};
