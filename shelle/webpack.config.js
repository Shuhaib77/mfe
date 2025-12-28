const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: "./src/index.js",

  mode: "development",

  devServer: {
    port: 3000,
  historyApiFallback: {
    index: '/index.html'
  },
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "auto"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  plugins: [
   new ModuleFederationPlugin({
  name: "shelle",
  remotes: {
    patients: "patients@http://localhost:3002/remoteEntry.js",
  },
shared: {
  react: { singleton: true, requiredVersion: false, eager: true },
  "react-dom": { singleton: true, requiredVersion: false, eager: true },
  "react-router-dom": { singleton: true, requiredVersion: false, eager: true },
  "react-router": { singleton: true, requiredVersion: false, eager: true },
}

})
,

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
