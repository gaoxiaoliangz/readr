module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    babel: {
      react: {
        options: {
          sourceMap: true,
          presets: ['react']
        },
        files: {
          "public/dist/js/book-list.js": "public/src/js/book-list.js",
        }
      },
      es2015: {
        options: {
          sourceMap: true,
          presets: ['es2015']
        },
        files: {
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          "public/dist/css/main.css": "public/src/css/main.scss",
          "public/dist/css/book.css": "public/src/css/book.scss"
        }
      }
    },

    watch: {
      css: {
        files: ['public/src/css/*.scss'],
        tasks: ['sass'],
        options: {
            spawn: false
        },
      },
      scripts: {
        files: ['public/src/js/*.js'],
        tasks: ['babel'],
        options: {
          spawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["babel","sass"]);
  grunt.registerTask('w',['watch']);
  grunt.registerTask('s',['sass']);
  grunt.registerTask('b',['babel']);

};
