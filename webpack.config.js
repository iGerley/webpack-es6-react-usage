const path = require('path');

module.exports = {
    "entry": './app/app.js',
    "output": {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 3000,
        contentBase: './public',
        inline: true
    }
}