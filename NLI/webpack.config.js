var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: './entry.js',
    output: {
        path: path.join(__dirname, 'Built'),
        filename: 'main.js'
    },
    module: {
        rules: [
          {
              test: /\.js/,
              exclude: '/node_modules/',
              use: 'babel-loader'
          },
          {
              test: /\.scss/,
              use: ExtractTextPlugin.extract({
                  use: [
                      'css-loader',
                      'postcss-loader',
                      'sass-loader',
                  ],
              }),
              exclude: '/node_modules/',
          },
          {
              test: /\.css/,
              use: ExtractTextPlugin.extract({
                  use: [
                      'css-loader'
                  ],
              }),
              exclude: '/node_modules/',
          },
          {
              test: /\.json/,
              use: 'json-loader',
              exclude: '/node_modules/'
          },
        ],
    },
    resolve: {
        alias: {
            "TweenLite": path.resolve('node_modules', 'gsap/src/minified/TweenLite.min.js'),
            "TweenMax": path.resolve('node_modules', 'gsap/src/minified/TweenMax.min.js'),
            "TimelineLite": path.resolve('node_modules', 'gsap/src/minified/TimelineLite.min.js'),
            "TimelineMax": path.resolve('node_modules', 'gsap/src/minified/TimelineMax.min.js'),
            "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
            "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
            "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js')
        },
    },
    plugins: [
      new ExtractTextPlugin("main.css"),
      new webpack.LoaderOptionsPlugin({
          options: {
              postcss: [autoprefixer({
                  browsers: ['> 1%', 'iOS 7', 'last 2 versions', 'ie 6-8', 'Firefox < 20', 'Firefox >= 20']
              })]
          }
      })
    ]
};