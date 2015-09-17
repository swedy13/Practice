var webpack	= require('webpack'),
	path			= require('path'),
	buildPath	= path.resolve(__dirname, 'build'),
	appPath		= path.resolve(__dirname, 'app'),
	nodePath	= path.resolve(__dirname, 'node_modules'),
	TARGET		= process.env.TARGET;


module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.jsx')]
  },
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
		preLoaders: [{
			test: /\.jsx?$/,
			loader: 'eslint-loader',
			include: appPath
		}],
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel?optional[]=runtime&stage=1'],
      exclude: nodePath
    },{
      test: /\.styl/,
      loaders: ['style', 'css', 'stylus']
    },{
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192',
			include: 'build/assets'
    }]
	}
}
