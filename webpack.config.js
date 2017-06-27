const path = require('path');
const typescript = require('typescript');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/') + '/Hiccup.ts',
    module : {
        rules : [
            {test : /\.(ts)?/, exclude: /node_modules/, use: 'ts-loader'}
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'hiccup.js',
        library: 'Hiccup',
        libraryTarget: 'umd'
    }
};
