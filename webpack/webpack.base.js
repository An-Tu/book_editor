const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (ROOTFOLDER, isDev) => ({
  entry: './src/index.jsx',

  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(ROOTFOLDER, 'build'),
    publicPath: 'http://localhost:8000',
  },

  resolve: {
    modules: [path.resolve(ROOTFOLDER, 'src'), 'node_modules'],
    alias: {
      src: path.resolve(ROOTFOLDER, 'src'),
    },
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(ROOTFOLDER, 'public', 'index.html'),
      minify: false,
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      __DEV__: isDev,
    }),
  ],
});
