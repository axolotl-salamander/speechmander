const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  //   mode: process.env.NODE_ENV,
  mode: 'development', 
  plugins: [new HtmlWebpackPlugin({title: 'development', template: './index.html'})],
  devServer: {
    host: 'localhost',
    port: 8080,
    static: {
      directory: path.resolve(__dirname),
      publicPath: '/',
    },
    proxy: [
      {
        context: ['/transcribe', '/test'],
        target: 'http://localhost:3000',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      },
    ],
  },
};
