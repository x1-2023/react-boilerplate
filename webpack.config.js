/**
 * @file webpack.config.js
 * @description Webpack development configuration file.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // HtmlWebpackPlugin: Generate HTML files from template files.
const Dotenv = require('dotenv-webpack'); // Dotenv: Enable support for environment files.

console.log('Using Webpack development configuration ...');

module.exports = {
    target: ['web', 'es5'],
    entry: {
        style: ['@babel/polyfill', './sources/js/style.js'],
        index: ['@babel/polyfill', './sources/js/entry.jsx'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName:
                                    // '[path][name]__[local]--[hash:base64:5]',
                                    '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'sources/static'),
        },
        port: 8080,
        hot: true,
        open: true,
        devMiddleware: {
            writeToDisk: false,
        },
        watchFiles: ['sources/**/*'], // Rebuild on source file changes.
        historyApiFallback: true, // Enable 'historyApiFallback' or react router won't work.
    },
    plugins: [
        // Generate 'index.html' file.
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './sources/html/index.html',
            chunks: ['index', 'style'],
        }),
        // Enable support for environment files.
        new Dotenv({
            // path: './.env.development', // Use specific environment file.
        }),
    ],
};
