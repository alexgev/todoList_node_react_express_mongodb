const path = require('path');

module.exports = {
    entry: path.join(__dirname, "client/main.js"),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] }
        ]
    }
}