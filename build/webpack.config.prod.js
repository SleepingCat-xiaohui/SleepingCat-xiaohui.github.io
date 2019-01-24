const merge = require('webpack-merge')
const Html = require('html-webpack-plugin')
const Clean = require('clean-webpack-plugin')
const Uglify = require('uglifyjs-webpack-plugin')
const Minicss = require('mini-css-extract-plugin')
const Optimizecss = require('optimize-css-assets-webpack-plugin')
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
        loader: Minicss.loader,
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
    new Minicss({
      filename: '[name].[chunkhash:6].css',
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      new Uglify({
        cache: true,
        parallel: true,
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new Optimizecss({}),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
})
