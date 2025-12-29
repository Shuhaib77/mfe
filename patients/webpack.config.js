const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",

  devServer: {
    port: 3002,
    historyApiFallback: true,
  },

  output: {
    publicPath: "auto",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
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
  react: { singleton: true, requiredVersion: false, eager: true },
  "react-dom": { singleton: true, requiredVersion: false, eager: true },
  "react-router-dom": { singleton: true, requiredVersion: false, eager: true },
  "react-router": { singleton: true, requiredVersion: false, eager: true },
}

    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
