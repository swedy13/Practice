var Webpack = require('webpack'),
	path = require('path'),
	nodePath = path.resolve(__dirname, 'node_modules'),
	appPath = path.resolve(__dirname, 'components'),
	buildPath = path.resolve(__dirname, 'build');


module.exports = {
	entry: ['webpack/hot/dev-server' ,path.resolve(__dirname, 'components/private.js')],
	output: {
		path: buildPath,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.styl$/,
			loaders: ['style', 'css', 'stylus'],
			include: appPath
		}]
	}
};
