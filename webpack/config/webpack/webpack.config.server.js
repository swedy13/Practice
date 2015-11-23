var webpack = require('webpack');


module.exports = {
  entry: '../routes/server/entry',
  module: {
    loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			query: { stage: 0 },
			exclude: /node_modules/
		},{
			test: /\.css$/,
			loader: 'css/locals?module&localIdentName=' + localIdentName
		},{
			test: /\.(png|jpe?g)(\?.*)?$/,
			loader: 'url?limit=8182'
		},{
			test: /\.(svg|ttf|woff|eot)(\?.*)?$/,
			loader: 'file'
		}]
  }
};
