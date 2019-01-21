const Html = require('html-webpack-plugin')
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
    new Html({
      template: resolve('src/template.html'),
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('public'),
  },
}
