const path = require('path');

const webpack = require('webpack');

// include the js minification plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// A webpack plugin to remove/clean your build folder(s) before building
const CleanWebpackPlugin = require('clean-webpack-plugin')

// LiveReload when running webpack --watch
const LiveReloadPlugin = require('webpack-livereload-plugin');

// Assets directory
const assetsDir = './app/themes/custom-theme/assets';

module.exports = {
  entry: [assetsDir + '/js/src/app.js', assetsDir + '/css/src/app.scss'],
  output: {
    filename: assetsDir + '/js/build/app.min.[hash].js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      // perform js babelization on all .js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
         }
        }
      },
      // compile all .scss files to plain old css
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    // Load modules for jQuery, Popper and Bootstrap javascript components
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Toast: 'exports-loader?Toast!bootstrap/js/dist/toast',
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    }),
    // clean out build directories on each build
    new CleanWebpackPlugin([assetsDir + '/js/build/*', assetsDir + '/css/build/*'], {
      watch: true
    }),
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      filename: assetsDir + '/css/build/main.min.[hash].css'
    }),
    // Live Reload
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  ],
  optimization: {
    minimizer: [
      // enable the js minification plugin
      new UglifyJSPlugin({
        cache: true,
        parallel: true
      }),
      // enable the css minification plugin
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};