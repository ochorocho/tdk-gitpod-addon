const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const SassLintPlugin = require('sass-lint-webpack')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: {
    popup: './javascript/popup.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true
  },
  watchOptions: {
    ignored: ['dist', 'node_modules']
  },
  devtool: 'source-map', // Do not render eval() in bundle
  plugins: [
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'addon', to: '../dist/'},
        {from: 'node_modules/webextension-polyfill/dist/browser-polyfill.js', to: './polyfill.js'}
      ]
    }),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ['node ./generate-icons.js'],
        blocking: false,
        parallel: true
      }
    }),
    new SassLintPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter'),
          configFile: '.eslintrc.js'
        }
      },
      {
        test: /.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: './'
            }
          },
          {loader: 'extract-loader'},
          {
            loader: 'css-loader',
            options: {url: false}
          },
          {loader: 'postcss-loader'},
          {loader: 'sass-loader'}
        ]
      }
    ]
  }
}
