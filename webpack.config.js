const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { ESBuildPlugin } = require("esbuild-loader");

module.exports = {
  mode: process.env.NODE_ENV,
  watch: process.env.NODE_ENV !== "production",
  devServer: {
    hot: process.env.NODE_ENV !== "production",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  entry: ["./app/index.tsx"],
  output: {
    path: path.join(__dirname, "public/scripts"),
    filename: "bundle.js",
  },
  optimization: {
    minimize: process.env.NODE_ENV === "production",
  },
  stats: "minimal",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "esbuild-loader",
          options: {
            // All options are optional
            target: "es2015", // default, or 'es20XX', 'esnext'
            jsxFactory: "React.createElement",
            jsxFragment: "React.Fragment",
            sourceMap: false, // Enable sourcemap
          },
        },
      },
    ],
  },
  devtool: "eval-source-map",
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new ESBuildPlugin(),
  ],
};
