const merge = require('webpack-merge')
const Html = require('html-webpack-plugin')
const path = require('path')
const config = require('./webpack.config.base')

function resolve (...dirs) {
  return path.resolve(__dirname, '..', ...dirs)
}

module.exports = merge(config, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
    ],
  },
  plugins: [
    new Html({
      template: resolve('src/template.html'),
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('public'),
  },
})
