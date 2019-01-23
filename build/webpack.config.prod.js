const merge = require('webpack-merge')
const Html = require('html-webpack-plugin')
const Clean = require('clean-webpack-plugin')
const Uglify = require('uglifyjs-webpack-plugin')
const path = require('path')
const config = require('./webpack.config.base')

function resolve (...dirs) {
  return path.resolve(__dirname, '..', ...dirs)
}

module.exports = merge(config, {
  mode: 'production',
  module: {
    rules: [{
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
    }],
  },
  plugins: [
    new Clean(['index.html', 'public'], { root: resolve() }),
    new Html({
      filename: resolve('index.html'),
      template: resolve('src/template.html'),
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      new Uglify({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
})
