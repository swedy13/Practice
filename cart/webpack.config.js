var path                = require('path'),
    HtmlWebpackPlugin   = require('html-webpack-plugin'),
    webpack             = require('webpack'),
    merge               = require('webpack-merge'),
    TARGET              = process.env.TARGET,
    ROOT_PATH           = path.resolve(__dirname);


module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', path.join(ROOT_PATH, 'app/main.jsx')]
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				include: path.join(ROOT_PATH, 'app'),
			},
		],
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel?optional[]=runtime&stage=1'],
            exclude: path.resolve(ROOT_PATH, 'node_modules'),
        },{
            test: /\.css/,
            loaders: ['style', 'css']
        },{
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
	/* plugins: [
	   new webpack.DefinePlugin({
	   'process.env': {
	   // This has effect on the react lib size
	   'NODE_ENV': JSON.stringify('production'),
	   }
	   }),
	   new webpack.optimize.UglifyJsPlugin({
	   compress: {
	   warnings: false,
	   },
	   }),
	   new HtmlWebpackPlugin({
	   title: 'FluxCart ES6',
	   }),
	   new webpack.HotModuleReplacementPlugin(),
	   new webpack.NoErrorsPlugin(),
	   new HtmlWebpackPlugin(),
	   ], */
};
