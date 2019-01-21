const Html = require('html-webpack-plugin')
const Clean = require('clean-webpack-plugin')
const path = require('path')

function resolve (...dirs) {
  return path.resolve(__dirname, '..', ...dirs)
}

module.exports = {
  mode: 'development',
  entry: {
    main: resolve('src/index.js'),
  },
  output: {
    path: resolve('public'),
    filename: '[name].[chunkhash:6].js',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    new Clean(['index.html', 'public'], { root: resolve() }),
    new Html({
      filename: resolve('index.html'),
      template: resolve('src/template.html'),
    }),
  ],
}
