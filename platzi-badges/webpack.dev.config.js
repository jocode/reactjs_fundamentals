const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js', // Bundle
    publicPath: 'http://localhost:9000/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  devServer: {
    port: 9000,
    hot: true,
    open: true, // Para que se abra inmediatamente en el navegador
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: { // Lista de loader
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/, // Para evitar que cargue esos archivos
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/' // La ruta para guardar los archivos de desarrollo
          }
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}