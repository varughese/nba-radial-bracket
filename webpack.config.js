const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
        contentBase: 'dist'
    },
	module: {
		rules: [{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'image-webpack-loader',
				enforce: 'pre'
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				]
			}, {
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /(node_modules)/
			}
		]
	}
};