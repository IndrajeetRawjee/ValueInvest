const path = require('path');

module.exports = {
  mode: 'development', // or 'production', or 'none'
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'wwwroot/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Adjusted to test both .js and .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};
