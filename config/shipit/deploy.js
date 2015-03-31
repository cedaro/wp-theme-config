var moment = require( 'moment' ),
	path = require( 'path' ),
	scp = require( 'scp' );

module.exports = function( shipit, done ) {
	var package = require( path.join( process.cwd(), 'package.json' ) );

	shipit.archiveFile = package.name + '-' + package.version + '.zip';
	shipit.deployPath = shipit.config.deployRoot + package.name + '/releases/';

	if ( 'win32' === process.platform ) {
		shipit.remoteCopy = function( src, dest, cb ) {
			var options = {
				file: src,
				path: dest,
				host: shipit.config.servers,
				user: 'deploy'
			};

			shipit.log( 'Remote copy "%s" to "%s"', src, dest );
			scp.send( options, cb );
		};
	}

	function startDeployment() {
		createDeploymentPath();
	}

	function createDeploymentPath() {
		return shipit.remote( 'mkdir -p ' + shipit.deployPath, copyProject );
	}

	// @todo Throw an error if the package doesn't exist
	function copyProject() {
		return shipit.remoteCopy( 'dist/' + shipit.archiveFile, shipit.deployPath, unpackDeployment );
	}

	function unpackDeployment() {
		var cmd = [];

		shipit.deployTime = moment().utc().format( 'YYYYMMDDHHmmss' );

		cmd.push( 'cd ' + shipit.deployPath );
		cmd.push( 'unzip -q ' + shipit.archiveFile );
		cmd.push( 'mv ' + package.name + ' ' + shipit.deployTime );
		cmd.push( 'rm ' + shipit.archiveFile );

		return shipit.remote( cmd.join( ' && ' ), updateSymlink );
	}

	// @link http://blog.endpoint.com/2009/09/using-ln-sf-to-replace-symlink-to.html
	function updateSymlink() {
		var cmd = [];

		cmd.push( 'cd ' + shipit.config.publicPath );
		cmd.push( 'ln -sn ' + shipit.deployPath + shipit.deployTime + ' ' + package.name + '-temp' );
		cmd.push( 'mv -T ' + package.name + '-temp ' + package.name );

		return shipit.remote( cmd.join( ' && ' ), cleanOldReleases );
	}

	// @link https://github.com/shipitjs/shipit-deploy/blob/9f0a94876becd1043c504fa2866df59d68e3c434/tasks/deploy/clean.js#L24
	function cleanOldReleases() {
		var cmd = '';

		//cmd = 'rm -rf `ls -r | tail -n +6`';

		cmd += '(';
			cmd += 'ls -rd ' + shipit.deployPath + '*|head -n 5;';
			cmd += 'ls -d ' + shipit.deployPath + '*';
		cmd += ')';
		cmd += '|sort|uniq -u|xargs rm -rf';

		return shipit.remote( cmd, done );
	}

	startDeployment();
};
