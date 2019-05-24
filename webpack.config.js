const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'js'),
		filename: 'frontend.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	devtool: false,
};
