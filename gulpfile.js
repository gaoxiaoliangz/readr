'use strict';
 
var gulp = require('gulp')
// var sass = require('gulp-sass')
var uglify = require('gulp-uglify')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')
var babel = require("gulp-babel")
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')

const paths = {
  styles: ['./src/scss/**/*.scss'],
  scripts: ['./assets/built/js/es6/**/*.js'],
  built: {
    css: './assets/built/css',
    js: './assets/built/js',
    es5: './assets/built/js/es5',
    es6: './assets/built/js/es6'
  }
}

// gulp.task('scss', () => {
//   return gulp.src(paths.styles)
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest(paths.built.css))
// })

gulp.task('js', () => {
  return gulp.src(paths.scripts)
    .pipe(babel())
    .pipe(gulp.dest(paths.built.es5))
    .pipe(webpack(Object.assign({}, webpackConfig, {
      watch: true,
      plugins: []
    })))
    .pipe(gulp.dest(paths.built.js))
})

gulp.task('build-js', () => {
  // gulp.src(paths.scripts)
  return tsProject.src()
    .pipe(ts(tsProject))
    .pipe(gulp.dest(paths.built.es6))
    .pipe(babel())
    .pipe(gulp.dest(paths.built.es5))
    .pipe(webpack(Object.assign({}, webpackConfig, {
      plugins: []
    })))
    .pipe(gulp.dest(paths.built.js))
})


// gulp.task('watch-scss', () => {
//   gulp.watch(paths.styles, ['scss'])
// })

gulp.task('watch-js', () => {
  gulp.watch(paths.scripts, ['js'])
})