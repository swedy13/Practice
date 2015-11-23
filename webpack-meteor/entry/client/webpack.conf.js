var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var babelSettings = { stage: 0 };
var cssLoader;
var plugins = [];

cssLoader = 'style!css?module&localIndentName=[name]__[local]__[hash:base64:5]';


module.exports = {
  entry: './entry',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			query: babelSettings,
			exclude: /node_modules/
		},{
			test: /\.css$/,
			loader: cssLoader
		},{
			test: /\.(png|jpe?g)(\?.*)?$/,
			loader: 'url?limit=8182'
		},{
			test: /\.(svg|ttf|woff|eot)(\?.*)?$/,
			loader: 'file'
		}]
  },
	plugins: plugins
};
