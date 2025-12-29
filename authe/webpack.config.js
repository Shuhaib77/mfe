const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",

  devServer: {
    port: 3003, // AUTH MF PORT
    historyApiFallback: true,
  },

  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "authe",
      filename: "remoteEntry.js",

      exposes: {
        "./App": "./src/App",
      },

      shared: {
        react: { singleton: true, requiredVersion: false, eager: true },
        "react-dom": { singleton: true, requiredVersion: false, eager: true },
        "react-router-dom": {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
        "react-router": {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
