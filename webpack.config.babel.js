const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer      = require('autoprefixer');
const webpack           = require('webpack');
const path              = require('path');

const IS_DIST = (process.argv.indexOf('--dist') !== -1) ? true : false;

const config = {
  devServer: {
    port: 1987
  },
  entry: {
    app: './src/script/index.js',
    /* create a vendor chunk for grabbing vendor resources */
    vendor: [
      'react',
      'react-dom',
      'react-router'
    ]
  },
  output: {
    path: `${__dirname}/public`,
    filename: '[name]-[hash].js'
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader?paths=src/style')
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/markup/index.html',
      filename: 'index.html',
      chunks: ['vendor', 'app']
    }),
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */'vendor',
      /* filename= */'vendor.js'
    ),
    new ExtractTextPlugin('app.css'),
    /* If --dist is present in process opts then minimize bundles */
    (IS_DIST) ? new webpack.optimize.UglifyJsPlugin() : function () {}
  ],
  postcss: function () {
    return [ autoprefixer ];
  }
}

module.exports = config;
