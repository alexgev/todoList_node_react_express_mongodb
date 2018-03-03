const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');


const isProd = process.env.NODE_ENV === 'production';
const build = new webpack.optimize.UglifyJsPlugin();
const buildConfig = isProd ? build : console.log('dev');


const common = {
    entry: path.join(__dirname, "client/main.js"),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    plugins: [
        buildConfig,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
}


module.exports = function (env) {
    return common;
}