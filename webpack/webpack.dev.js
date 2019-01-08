const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = ROOTFOLDER => ({
  mode: 'development',

  module: {
    rules: [
      {
        test: /.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
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

  devServer: {
    historyApiFallback: true,
    stats: {
      chunks: false,
      colors: true,
      children: false,
    },
    contentBase: ROOTFOLDER,
    port: 8000,
    staticOptions: {
      index: path.resolve('build', 'index.html'),
    },
  },
});
