const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './src/index.html',
          to: 'index.html',
        },
        {
          from: './src/style.css',
          to: 'style.css',
        }
      ]
    }),  
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watchOptions: {
    ignored: ['/node_modules/']
  },  
  watch: true
};