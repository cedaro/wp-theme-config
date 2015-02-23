module.exports = {
	package: {
		options: {
			archive: '<%= paths.dist %>/<%= package.name %>-<%= package.version %>.zip'
		},
		expand: true,
		cwd: '<%= paths.build %>',
		src: [ '**/*' ],
		dest: '<%= package.name %>/',
	}
}
