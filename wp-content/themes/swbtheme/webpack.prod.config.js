var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var Path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./assets/src/js/myscripts.js"],
  output: {
    filename: 'myscripts.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
          ],
        },
      },
    ],
  },
  resolve: {
    alias: {
      "TweenLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      "TweenMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      "TimelineLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      "TimelineMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      "animation.gsap": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      "debug.addIndicators": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    },
  },
  plugins: [
    new UglifyJSPlugin()
  ],
};