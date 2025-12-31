// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { ModuleFederationPlugin } = require("webpack").container;

// module.exports = {
//   mode: "development",
//   entry: "./src/index.tsx",
//   devServer: {
//     port: 3003,
//     historyApiFallback: true,
//   },
//   output: {
//     publicPath: "auto",
//   },
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", ".jsx"],
//   },
    
//   module: {
//     rules: [
//       // Add this rule for TypeScript/JSX
//       {
//         test: /\.(ts|tsx|js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       // CSS rule
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
//   plugins: [
//     new ModuleFederationPlugin({
//       name: "authe",
//       filename: "remoteEntry.js",
//       exposes: {
//         "./App": "./src/App",
//       },
//       shared: {
//         react: { 
//           singleton: true,
//           eager: true,
//           requiredVersion: "^18.0.0"
//         },
//         "react-dom": { 
//           singleton: true,
//           eager: true,
//           requiredVersion: "^18.0.0"
//         },
//         "react-router-dom": { 
//           singleton: true,
//           eager: true,
//           requiredVersion: "^6.0.0"
//         },
//       }
//     }),
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//     }),
//   ],
// };


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "production",        // <-- IMPORTANT
  entry: "./src/index.tsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),  // <-- IMPORTANT
    publicPath: "https://mfe-4xig.vercel.app",
    clean: true
  },

  devServer: {
    port: 3003,
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
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
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        "react-router-dom": { singleton: true, eager: true },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
