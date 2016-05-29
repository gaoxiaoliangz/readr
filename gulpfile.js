'use strict';
 
var gulp = require('gulp')
var sass = require('gulp-sass')
var uglify = require('gulp-uglify')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')
var babel = require("gulp-babel")

const paths = {
  styles: ['./src/scss/**/*.scss'],
  scripts: ['./src/js/**/*.js', './core/frontend/**/*.js', './core/frontend/**/*.jsx'],
  built: {
    css: './assets/built/css',
    js: './assets/built/js',
    es5: './assets/built/js/es5'
  }
}

gulp.task('scss', () => {
  return gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.built.css))
})

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
  return gulp.src(paths.scripts)
    .pipe(babel())
    .pipe(gulp.dest(paths.built.es5))
    .pipe(webpack(Object.assign({}, webpackConfig, {
      plugins: []
    })))
    .pipe(gulp.dest(paths.built.js))
})

gulp.task('watch', () => {
  gulp.watch(paths.styles, ['scss'])
  gulp.watch(paths.scripts, ['js'])
})