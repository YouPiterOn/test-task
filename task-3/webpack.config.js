const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

const localEnv = dotenv.config().parsed;

module.exports = (env) => {
  return {
    entry: './src/index.js',
    mode: env.dev === true ? 'development' : 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: [
              'style-loader',
              {
                  loader: 'css-loader',
                  options: {
                      esModule: false,
                      modules: {
                          localIdentName: '[local]--[name]--[hash:base64:5]'
                      }
                  }
              }
          ]
      },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.API_BASE_URL': localEnv.API_BASE_URL
            ? JSON.stringify(localEnv.API_BASE_URL)
            : JSON.stringify(process.env.API_BASE_URL),
      })
    ],
    devServer: {
      static: './dist',
      port: 3000,
      open: true,
    },
  }
};
