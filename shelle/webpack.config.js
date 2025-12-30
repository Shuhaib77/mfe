// // const HtmlWebpackPlugin = require("html-webpack-plugin");
// // const path = require("path");
// // const ModuleFederationPlugin =
// //   require("webpack").container.ModuleFederationPlugin;

// // module.exports = {
// //   entry: "./src/index.js",

// //   mode: "development",

// //   devServer: {
// //     port: 3000,
// //     historyApiFallback: {
// //       index: "/index.html",
// //     },
// //   },

// //   output: {
// //     filename: "bundle.js",
// //     path: path.resolve(__dirname, "dist"),
// //     clean: true,
// //     publicPath: "auto",
// //   },

// //   module: {
// //     rules: [
// //       {
// //         test: /\.jsx?$/,
// //         exclude: /node_modules/,
// //         use: "babel-loader",
// //       },
// //     ],
// //   },

// //   resolve: {
// //     extensions: [".js", ".jsx"],
// //   },

// //   plugins: [
// //     new ModuleFederationPlugin({
// //       name: "shelle",
// //       remotes: {
// //         patients: "patients@http://localhost:3002/remoteEntry.js",
// //         authe: "authe@http://localhost:3003/remoteEntry.js",
    
// //       },
// //       shared: {
// //         react: { singleton: true, requiredVersion: false, eager: true },
// //         "react-dom": { singleton: true, requiredVersion: false, eager: true },
// //         "react-router-dom": {
// //           singleton: true,
// //           requiredVersion: false,
// //           eager: true,
// //         },
// //         "react-router": {
// //           singleton: true,
// //           requiredVersion: false,
// //           eager: true,
// //         },
// //       },
// //     }),
// //     new HtmlWebpackPlugin({
// //       template: "./public/index.html",
// //     }),
// //   ],
// // };
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   devServer: {
//     port: 3000,
//     historyApiFallback: true,
//   },
//   output: {
//     publicPath: "auto",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader', 'postcss-loader'],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: "shell",
//       remotes: {
//         authe: "authe@http://localhost:3003/remoteEntry.js",
//         patients: "patients@http://localhost:3002/remoteEntry.js",
//       },
//       shared: {
//         react: { 
//           singleton: true, 
//           requiredVersion: false, 
//           eager: true 
//         },
//         "react-dom": { 
//           singleton: true, 
//           requiredVersion: false, 
//           eager: true 
//         },
//         "react-router-dom": { 
//           singleton: true, 
//           requiredVersion: false, 
//           eager: true 
//         },
//         "react-router": { 
//           singleton: true, 
//           requiredVersion: false, 
//           eager: true 
//         },
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
  mode: "development",
  entry: "./src/index.js", // Entry is index.js which imports bootstrap
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        authe: "authe@http://localhost:3003/remoteEntry.js",
        patients: "patients@http://localhost:3002/remoteEntry.js",
      },
      shared: {
  react: { singleton: true, requiredVersion: false },
  "react-dom": { singleton: true, requiredVersion: false },
  "react-router-dom": { singleton: true, requiredVersion: false },
}
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};