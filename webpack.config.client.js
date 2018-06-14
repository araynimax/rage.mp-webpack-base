var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './client/index.js',
     output: {
         path: path.join(__dirname, '..', 'client_packages'),
         filename: 'index.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
 };