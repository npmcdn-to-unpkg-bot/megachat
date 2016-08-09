'use strict'
const
	path = require('path')

module.exports = {
	entry: './src/client/entry.js',
	output: {
		path: path.resolve(__dirname, 'public', 'js'),
		publicPath: 'public/',
		filename: 'webpack.bundle.js'
	},
	module: {
		loaders: [{
			test: /.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}
