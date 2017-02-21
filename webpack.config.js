const path = require('path');

module.exports = {
	entry: [
	 	'./src/index.js'
	],
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'compiled.js' 
	},
	resolve: {
		modules: [
			'node_modules',
			path.join(__dirname, 'src')
		],
		extensions: ['.js']	
	}
}
