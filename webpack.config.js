

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', "index.html")}),
        new webpack.ProgressPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
}