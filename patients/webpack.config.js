// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   devServer: {
//     port: 3002,
//     historyApiFallback: true,
//   },
//   output: {
//     publicPath: "auto",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         use: "babel-loader",
//         exclude: /node_modules/,
//       },
//       // ADD THIS CSS RULE
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'postcss-loader',
//         ],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: "patients",
//       filename: "remoteEntry.js",
//       exposes: {
//         "./App": "./src/App",
//       },
//       shared: {
//         react: { singleton: true, requiredVersion: false, eager: true },
//         "react-dom": { singleton: true, requiredVersion: false, eager: true },
//         "react-router-dom": { singleton: true, requiredVersion: false, eager: true },
//         "react-router": { singleton: true, requiredVersion: false, eager: true },
//       }
//     }),
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//     }),
//   ],
// };

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    publicPath: "http://localhost:3002/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
         use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "patients",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        react: { 
          singleton: true,
          eager: true,
          requiredVersion: "^18.0.0"
        },
        "react-dom": { 
          singleton: true,
          eager: true,
          requiredVersion: "^18.0.0"
        },
        "react-router-dom": { 
          singleton: true,
          eager: true,
          requiredVersion: "^6.0.0"
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};