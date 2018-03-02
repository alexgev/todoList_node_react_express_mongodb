const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

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
    }
}


module.exports = function(env) {
    return common;
}