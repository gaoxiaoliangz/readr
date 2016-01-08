module.exports = function(grunt) {


  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          "dist/app.js": "app.js",
          "dist/test-es6.js": "test-es6.js"
        }
      }
    },
    "sass": {
      options: {
        sourcemap: 'true'
      },
      dist: {
        files: {
          "public/dist/main.css": "public/src/main.scss"
        },
      }
    }
  });

  grunt.registerTask("default", ["babel","sass"]);


};