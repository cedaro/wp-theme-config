module.exports = {
	styleVersion: {
		src: [
			'<%= paths.less %>/*(style|wpcom).less'
		],
		overwrite: true,
		replacements: [
			{
				from: /Version:.*$/m,
				to: 'Version: <%= package.version %>'
			}
		]
	},
	functionsVersion: {
		src: [
			'<%= paths.source %>/functions.php'
		],
		overwrite: true,
		replacements: [
			{
				from: /return '\d+\.\d+\.\d+/g,
				to: 'return \'<%= package.version %>'
			}
		]
	},
	templateHeader: {
		src: [
			'<%= paths.source %>/style.css'
		],
		overwrite: true,
		replacements: [
			{
				from: /(Template: [^\/]+)\/src/g,
				to: '$1'
			}
		]
	}
};
