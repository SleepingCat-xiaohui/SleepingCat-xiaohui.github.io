const Vue = require('vue-loader/lib/plugin')
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
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          fix: true,
        },
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
      }, {
        test: /\.js$/,
        use: 'babel-loader',
      }, {
        test: /\.css$/,
        use: [{
          loader: 'css-loader',
        }],
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:6].[ext]',
        },
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:6].[ext]',
        },
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:6].[ext]',
        },
      },
    ],
  },
  plugins: [
    new Vue(),
    new Html({
      template: resolve('src/template.html'),
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('public'),
  },
}
