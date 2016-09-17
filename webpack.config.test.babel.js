const webpack = require('webpack');
const path    = require('path');


/**
  * Generates test bundle for mocha to use
*/
const config = {
  entry: {
    test: './test/test.build.js'
  },
  output: {
    path: `${__dirname}/test`,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: /(src\/script)/,
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ]
        }
      },
      {
        test: /\.styl$/,
        include: /(src\/)/,
        loader: 'null-loader'
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('src/script'),
      path.resolve('src/style')
    ],
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [],
}

module.exports = config;
