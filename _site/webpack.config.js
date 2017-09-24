const path = require('path');
module.exports = {
  // webpack folder's entry js - excluded from jekll's build process, since the compiled version is what we'll use in the DOM.
  entry: "./webpack/entry.js",
  output: {
    // put the generated file in the assets folder so jekyll will grab it.
      path: path.resolve(__dirname, 'javascript'),
      filename: "bundle.js"
  },
  // loaders for different libraries and, eventually, filetypes
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};