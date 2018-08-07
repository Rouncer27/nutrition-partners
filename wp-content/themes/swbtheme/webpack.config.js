var Path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./assets/src/js/myscripts.js"],
  output: {
    filename: "myscripts.js"
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: [
            ["es2015", { modules: false }],
            ["react"],
            [
              "env",
              { targets: { browsers: ["last 3 version", "> 0.5%", "ie 10"] } }
            ]
          ],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  },
  resolve: {
    alias: {
      TweenLite: Path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TweenLite.js"
      ),
      TweenMax: Path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TweenMax.js"
      ),
      TimelineLite: Path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TimelineLite.js"
      ),
      TimelineMax: Path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TimelineMax.js"
      ),
      ScrollMagic: Path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
      ),
      "animation.gsap": Path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
      ),
      "debug.addIndicators": Path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"
      )
    }
  }
};
