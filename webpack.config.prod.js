const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const NullPlugin = require('webpack-null-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.config.common.js');

const ANALYZER = process.env.ANALYZER;

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    ANALYZER === 'true' ? new BundleAnalyzerPlugin() : new NullPlugin(),
  ]
});