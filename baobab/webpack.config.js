var Webpack = require('webpack'),
	path	= require('path'),
	nodePath = path.resolve(__dirname, 'node_modules'),
	appPath = path.resolve(__dirname, 'components'),
	buildPath = path.resolve(__dirname, 'build');


module.exports = {
	entry: [
		'webpack/hot/dev-server',
		path.resolve(__dirname, 'main.js')
	],
	output: {
		path: buildPath,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: nodePath,
			loaders: ['react-hot', 'baobab-hot', 'babel?optional=es7.decorators'],
			include: appPath
		}, {
			test: /\.styl$/,
			loaders: ['style', 'css', 'stylus']
		}]
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NoErrorsPlugin()
	]
};
