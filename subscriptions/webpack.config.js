var webpack = require('webpack'),
	path			= require('path');


module.exports = {
	entry: {
		app: [
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8000',
			path.resolve(__dirname, './public/js/app.js')]
	},
	output: {
		path: path.resolve(__dirname, '/build'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: 'babel',
			exclude: '/node_modules'
		},{			
			test: /\.html/,
			loaders: 'html',
			include: path.resolve(__dirname, '/public')
		},{			
			test: /\.styl/,
			loaders: 'style!css!stylus',
			include: path.resolve(__dirname, '/public')			
		}]
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
