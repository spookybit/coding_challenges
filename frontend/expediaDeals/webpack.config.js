module.exports = {
  entry: "./script.js",
  output: {
    filename: "./bundle.js"
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ['.js', '*']
  }
};
