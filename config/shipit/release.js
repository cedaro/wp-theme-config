const aws = require('@aws-sdk/client-s3');
const credentials = require('@aws-sdk/credential-provider-ini');
const fs = require('fs');
const path = require('path');

const { S3Client, PutObjectCommand } = aws;

module.exports = function( shipit ) {
	const project = require( path.join( process.cwd(), 'package.json' ) );
	const archiveFile = project.name + '-' + project.version + '.zip';
	const uploadPath = project.name + '/' + archiveFile;

	if ( 'aws' !== shipit.environment || 's3' !== shipit.config.servers ) {
		throw new Error( 'The release task only works with Amazon S3.' );
	}

	const client = new S3Client({
		credentials: credentials.fromIni({ profile: shipit.config.profile || 'shipit' }),
		region: shipit.config.region || 'us-east-1'
	});

	shipit.log( 'Uploading "dist/%s" to "%s"', archiveFile, uploadPath );

	return new Promise(function( resolve, reject ) {
		client.send(new PutObjectCommand({
			ACL: 'public-read',
			Bucket: shipit.config.bucket || 'audiotheme-packages',
			Key: uploadPath,
			Body: fs.readFileSync( 'dist/' + archiveFile ),
			ContentType: 'application/zip',
		}), function( error, response ) {
			if ( error ) {
				reject( error );
			} else {
				console.log( response );
				resolve( uploadPath );
			}
		});
	});
};
