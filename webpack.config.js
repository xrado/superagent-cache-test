var webpack = require('webpack');
var path = require('path');

var bundleName = '[name].js';

var options = {
	context: __dirname + "/",
	entry: {
		vendor: [
			'react',
			'react-dom',
			'lodash',
			'superagent',
		],
		app: './main.js',
		html: "./index.html",
	},
	output: {
		path: __dirname + '/public',
		filename: bundleName,
		publicPath: 'http://localhost:8080/',
		sourceMapFilename: 'sourcemap.map',
	},

	module: {
		loaders: (function() {
			var modules = [
				{
					test: /\.html$/,
					loader: "file?name=[name].[ext]",
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loaders: ["react-hot", "babel-loader"],
				}
			];

			return modules;
		})()
	},

	plugins: (function () {
		var plugins = [
			new webpack.NoErrorsPlugin(),
			new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */bundleName),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify(process.env.NODE_ENV)
				}
			})
		];

		return plugins;
	})(),

	devtool: 'eval'

};

module.exports = options;