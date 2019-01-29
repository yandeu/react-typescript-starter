const common = require('./webpack.common.js')
const path = require('path')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    noInfo: true
  }
})
