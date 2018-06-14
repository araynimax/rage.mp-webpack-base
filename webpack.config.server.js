var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: './server/index.js',
     output: {
         path: path.join(__dirname, '..', 'packages' , 'REPLACE_THIS_NAME'),
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