const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    inline: true,
    port: 8080
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  }
};
