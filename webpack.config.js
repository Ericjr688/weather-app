const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    initialPageLoad: './src/initialPageLoad.js',
    generateHeader: './src/generateHeader.js',
    DOMManipulation: './src/DOMManipulation.js',
    logic: './src/logic.js',
    apiHandler: './src/apiHandler.js',
    searchBar: './src/searchBar.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Weather App',
    templateContent:
      `<html>
        <head>
          <link rel="icon" href="../src/logo.png" />
          <title>Weather App </title>
        </head>
        <body>
          <div id='content'></div>
        </body>
      </html>`
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
};