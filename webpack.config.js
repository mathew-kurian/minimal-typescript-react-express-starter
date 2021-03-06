const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  watch: process.env.NODE_ENV !== "production",
  devServer: {
    hot: process.env.NODE_ENV !== "production"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  entry: ["./app/index.tsx"],
  output: {
    path: path.join(__dirname, "public/scripts"),
    filename: "bundle.js"
  },
  optimization: {
    minimize: process.env.NODE_ENV === "production"
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: true
          }
        }
      }
    ]
  },
  devtool: "eval-source-map",
  plugins: [new ForkTsCheckerWebpackPlugin(), new webpack.NamedModulesPlugin()]
};
