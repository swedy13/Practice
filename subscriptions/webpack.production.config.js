var webpack = require('webpack'),
	path			= require('path');


var config = {
	entry: path.resolve(__dirname, 'app/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: [node_modules_dir],
			loader: 'babel'
		}]
	}
};


module.exports = config;
