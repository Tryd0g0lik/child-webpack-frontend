// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
	mode: 'none',
	entry: path.resolve(__dirname, './src/db/news.json'),
	output: {
		path: path.resolve(__dirname, '../../../dist')
	},

	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: './src/db/news.json', to: 'db/', },
				// transform(content) {
				//     const data = JSON.parse(content);
				//     // modify the JSON data here if needed
				//     return JSON.stringify(data);
				//   },
			],
		}),
		// new webpack.SourceMapDevToolPlugin({
		// 	filename: '[file].map.[query]',
		// 	exclude: path.join(__dirname, 'src'),
		// }),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [

			// {
			// 	test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
			// 	type: 'asset',
			// },

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/

		],
		exprContextCritical: false
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
}

// module.exports = () => {}
// 'production';
// 'development';

