'use strict'
let webpack = require('webpack')
let path = require('path')
module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		compress: true,
		inline: true
	}
}
