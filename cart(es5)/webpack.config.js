var	webpack		= require('webpack'),
    path		= require('path'),
	buildPath	= path.resolve(__dirname, 'build'),
	appPath		= path.resolve(__dirname, 'client'),
	nodePath	= path.resolve(__dirname, 'node_modules');


module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', path.resolve(__dirname, './js/App.js')]
	},
	output: {
		path: buildPath,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel'],
			exclude: nodePath
		},{
			test: /\.styl$/,
			loaders: ['style', 'css', 'stylus']
		},{
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}]
	}
};
