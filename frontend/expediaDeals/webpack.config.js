let path = require("path");

module.exports = {
  entry: "./script/script.js",
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: "./bundle.js"
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ['.js', '*']
  }
};
