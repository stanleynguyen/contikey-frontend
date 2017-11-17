const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve('src');
const DIST_DIR = path.resolve('dist');

module.exports = {
  entry: [`${SRC_DIR}/index.jsx`],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle-[hash].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
