const merge = require('webpack-merge');
const base = require('./webpack/webpack.base');
const dev = require('./webpack/webpack.dev');
const prod = require('./webpack/webpack.prod');

const isDev = process.env.NODE_ENV === 'development';

const config = isDev ? dev(__dirname) : prod();
module.exports = merge(base(__dirname, isDev), config);
