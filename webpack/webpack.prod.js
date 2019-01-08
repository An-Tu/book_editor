const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => ({
  mode: 'production',

  stats: {
    children: false,
  },

  module: {
    rules: [
      {
        test: /.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browsers: ['last 2 versions'],
              },
              plugins() {
                return [autoprefixer];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  optimization: {
    nodeEnv: 'production',
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
          compress: {
            warnings: false,
            drop_console: true,
          },
          cache: true,
          parallel: true,
          sourceMap: true,
        },
      }),
      new OptimizeCSSAssetsPlugin({
        canPrint: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        polyfill: {
          name: 'polyfill',
          test: /polyfill/,
          chunks: 'async',
          priority: 1,
          enforce: true,
        },
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].style.[contenthash].css',
    }),
  ],
});
