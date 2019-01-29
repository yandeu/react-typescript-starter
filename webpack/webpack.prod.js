const common = require('./webpack.common.js')
const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          filename: '[name].[contentHash].bundle.js'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.js'], {
      root: path.resolve(__dirname, '../')
    })
  ]
})
