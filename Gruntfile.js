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
          "public/dist/js/book-list-react.js": "public/src/js/book-list-react.js",
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

    uglify: {
      options: {
        sourceMap: true,
        mangle: {
        }
      },
      target: {
        files: {
          'public/dist/js/book.min.js': ['public/src/js/book.js'],
          'public/dist/js/showdia.min.js': ['public/src/js/showdia.js'],
          'public/dist/js/book-list-vue.min.js': ['public/src/js/book-list-vue.js'],
          // 'public/dist/js/book-list-angular.min.js': ['public/src/js/book-list-angular.js']
          'public/dist/js/book-list-backbone.min.js': ['public/src/js/book-list-backbone.js']
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          "public/dist/css/main.css": "public/src/scss/main.scss",
        }
      }
    },

    image: {
      static: {
        options: {
          pngquant: true,
          optipng: false,
          zopflipng: true,
          advpng: true,
          jpegRecompress: false,
          jpegoptim: true,
          mozjpeg: true,
          gifsicle: true,
          svgo: true
        }
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'public/src/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'public/dist/'
        }]
      }
    },

    concat: {
      options: {
        separator: ';',
        sourceMap: true,
        style: 'compressed'
      },
      css: {
        src: ['public/lib/mui/css/mui.min.css', 'public/dist/css/main.css'],
        dest: 'public/dist/css/style.css',
      },
    },

    watch: {
      css: {
        files: ['public/src/scss/*.scss'],
        tasks: ['sass', 'concat'],
        options: {
            spawn: false
        },
      },
      scripts: {
        files: ['public/src/js/*.js'],
        tasks: ['babel','uglify'],
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
