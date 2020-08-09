const {resolve} = require('path');
const fs = require('fs');

module.exports = {
  devtool: 'none',
  mode: 'production',
  entry: {
    index: [__dirname + '/lib/index.js']
  },
  output: {
    path: __dirname,
    library: 'sift',
    libraryTarget: 'umd',
    filename: 'sift.min.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
    ]
  }
};