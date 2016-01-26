var path = require("path");

module.exports = {
    entry: "public/src/js/book-list-angular.js",
    output: {
        path: "public/dist/js",
        filename: "book-list-angular.min.js"
    },
    devtool: 'source-map',
    module: {
      loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    },
    resolve: {
      root: path.resolve(__dirname),
      alias: {
        lib: "public/lib",
        jQuery: "public/lib/jquery/jquery.min.js"
      },
      extensions: ['', '.js', '.jsx']
    },
};
