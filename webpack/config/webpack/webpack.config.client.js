var webpack = require('webpack');


module.exports = {
  entry: [
		'../routes/client/entry',
    'webpack/hot/dev-server',		
    'webpack-dev-server/client?http://localhost:3000',
	],
  module: {
    loaders: [{
			test: /\.js?$/,
			loader: 'babel',
			exclude: /node_modules/
		},{
			test: /\.styl$/,
			loader: 'style!css!stylus'
		},{
			test: /\.(png|jpe?g)(\?.*)?$/,
			loader: 'url?limit=8182'
		},{
			test: /\.(svg|ttf|woff|eot)(\?.*)?$/,
			loader: 'file'
		}]
  },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	]
};
