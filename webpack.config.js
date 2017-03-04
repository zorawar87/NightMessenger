module.exports = {
  entry: ['./src/js/app.js'],
  output: {
    filename: 'dist/nightmode.css'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
    }, ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devtool: [
  "source-map"
  ]
};
