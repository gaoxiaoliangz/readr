module.exports = function(grunt) {

  var webpack = require("webpack");
	var webpackConfig = require("./webpack.config.js");
  require("load-grunt-tasks")(grunt);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    path: {
      src: "./src",
      dist: "./assets/built",
      vendor: "./assets/vendors",
      core: "./core"
    },
    babel: {
      es5: {
        options: {
          sourceMap: false
        },
        files: [{
          "expand": true,
          "cwd": "<%=path.core%>/frontend",
          "src": ["**/*.{js,jsx}"],
          "dest": "<%=path.dist%>/js/es5",
          "ext": ".js"
        }]
      }
    },
    webpack: {
    	build: {
        entry: {
          index: ['<%=path.src%>/js/index']
        },
        output: {
          path: '<%=path.dist%>/js',
          filename: '[name].js'
        },
        module: webpackConfig.module,
        resolve: webpackConfig.resolve,
        plugins: [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
          })
        ]
    	}
    },
    sass: {
      dist: {
        files: [{
          "expand": true,
          "cwd": "<%=path.src%>/scss",
          "src": ["*.scss"],
          "dest": "<%=path.dist%>/css",
          "ext": ".css"
        }],
        options: {
          debugInfo: true,
          lineNumbers: true
        }
      }
    },
    uglify: {
      options: {
        sourceMap: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%=path.dist%>/js',
          src: ['*.js','!*.min.js', '!*.built.js'],
          dest: '<%=path.dist%>/js',
          ext: '.built.js'
        }]
      }
    },
    cssmin: {
      vendor: {
        files: {
          '<%=path.dist%>/css/vendor.built.css': ['<%=path.vendor%>/normalize.css', '<%=path.vendor%>/mui/css/mui.css']
        }
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%=path.dist%>/css',
          src: ['*.css', '!*.min.css', '!*.built.css'],
          dest: '<%=path.dist%>/css',
          ext: '.built.css'
        }]
      }
    },
    copy: {
      dist: {
        expand: true,
        cwd: '<%=path.src%>',
        src: 'fonts/*',
        dest: '<%=path.dist%>',
      },
    },
    image: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%=path.src%>',
          src: ['img/*.{png,jpg,gif,svg}'],
          dest: '<%=path.dist%>'
        }]
      }
    },
    watch: {
      styles: {
        files: ['<%=path.src%>/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      webpack:{
        files:['<%=path.src%>/js/*.js', '<%=path.core%>/frontend/**/*.js'],
        tasks:['webpack'],
        options: {
          spawn: false
        }
      },
      babel:{
        files:['<%=path.core%>/frontend/**/*.{js,jsx}'],
        tasks:['babel'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('build-css', ['sass','cssmin']);
  grunt.registerTask('watch-js', ['watch:babel']);
  grunt.registerTask('build-js', ['babel','webpack','uglify']);
  grunt.registerTask('build', ['image','sass','cssmin','copy','babel','webpack','uglify']);
};
