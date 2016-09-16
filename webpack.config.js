const path    = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './index'
  ],

  output: {
    filename: 'react-flex.js',
    library: 'react-flex',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel']
    }]
  }

}
