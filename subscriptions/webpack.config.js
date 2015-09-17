var webpack = require('webpack'),
	path			= require('path'),
	buildPath = path.resolve(__dirname, 'build/js'),
	stylePath = path.resolve(__dirname, 'public/css'),
	viewPath  = path.resolve(__dirname, 'views'),
	appPath		= path.resolve(__dirname, 'components'),
	nodePath	= path.resolve(__dirname, 'node_modules');


module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', path.resolve(__dirname, './app.js')],
	},
	output: {
		path: buildPath,
		filename: 'app.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loaders: 'jshint',
				include: buildPath
			}
		],
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel'],
			exclude: nodePath
		},{
			text: /\.css$/,
			loaders: ['style', 'css'],
			include: stylePath
		},{
			text: /\.handlebars$/,
			loader: 'handlebars-loader',
			include: viewPath
		},{
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}]
	}
};
