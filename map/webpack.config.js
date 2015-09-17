var path = require('path');

var config = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'main.js')],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.styl$/, loader: 'style-loader!html-loader' },
			{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
			{ test: /\.js?$/, loader: 'babel-loader', include: path.join(__dirname, 'core') },
			{ test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'], include: path.join(__dirname, 'core') }
		]
	}
};

module.exports = config;
