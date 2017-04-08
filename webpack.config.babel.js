const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer      = require('autoprefixer');
const webpack           = require('webpack');
const path              = require('path');

const IS_DIST = (process.argv.indexOf('--dist') !== -1) ? true : false;

const config = {
  devServer: {
    contentBase: `${__dirname}/public`,
    hot: true,
    inline: true,
    port: 1987,
  },
  // devtool: 'cheap-eval-source-map',
  entry: {

    app: [
      'react-hot-loader/patch',
      // activate HMR for React
      'webpack-dev-server/client?http://localhost:1987',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      './src/script/index.js',
    ],
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
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: /(src\/script)/,
        query: {
          presets: [
            ["es2015", {"modules": false}],
            'react',
            'stage-0'
          ],
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      },
      {
        test: /\.styl$/,
        include: /(src\/)/,
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader',
          {
            loader: 'stylus-loader',
            options: {
              paths: 'src/style',
            },
          }
        ],
        // }),
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('src/script'),
      path.resolve('src/style'),
      'node_modules',
    ],
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new HtmlWebpackPlugin({
      template: './src/markup/index.html',
      filename: 'index.html',
      chunks: ['vendor', 'app']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', /* chunkName= */
      filename: 'vendor.js' /* filename= */
    }),
    new ExtractTextPlugin('app.css'),
    /* If --dist is present in process opts then minimize bundles */
    (IS_DIST) ? new webpack.optimize.UglifyJsPlugin() : function () {},
  ],
}

module.exports = config;
