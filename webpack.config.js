const path = require('path');
module.exports = {
    entry: './src/',
    devtool: 'inline-source-map',
    module: {
        rules: [

            {
                test: /\.html$/,
                type: "./index.html",
                generator: {
                    filename: "[index][html]",
                },
            },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
