'use strict';
 
var gulp = require('gulp')
// var sass = require('gulp-sass')
var uglify = require('gulp-uglify')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')
var babel = require("gulp-babel")
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')

// const paths = {
//   styles: ['./src/scss/**/*.scss'],
//   scripts: ['./assets/built/js/es6/**/*.js'],
//   built: {
//     css: './assets/built/css',
//     js: './assets/built/js',
//     es5: './assets/built/js/es5',
//     es6: './assets/built/js/es6'
//   }
// }
const assetBase = 'assets/built'
const paths = {
  prod: {
    assets: '/built/production',
    assets2: '../production'
  },
  src: {
    html: ['src/html/index.html'],
    scss: ['src/scss/**/*.scss'],
    // es6: ['static/built/es6/**/*.js'],
    es6: `${assetBase}/js/es6/**/*.js`,
    bundles: ['static/built/bundles/**/*.js'],
    img: ['src/img/*'],
    fonts: ['src/fonts/*']
  },
  built: {
    root: assetBase,
    css: `${assetBase}/css`,
    js: `${assetBase}/js`,
    es6: `${assetBase}/js/es6`,
    es5: `${assetBase}/js/es5`,
    img: `${assetBase}/img`,
    fonts: `${assetBase}/fonts`
  }
}

gulp.task('build-es5', () => {
  return gulp.src(paths.src.es6)
    .pipe(babel())
    .pipe(gulp.dest(paths.built.es5))
})

gulp.task('watch-js', () => {
  gulp.watch(paths.src.es6, ['build-es5'])
})

// gulp.task('scss', () => {
//   return gulp.src(paths.styles)
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest(paths.built.css))
// })


// gulp.task('build-es5', () => {
//   return tsProject.src()
//     .pipe(ts(tsProject))
//     .pipe(gulp.dest(paths.built.es6))
//     .pipe(babel())
//     .pipe(gulp.dest(paths.built.es5))
//     .pipe(webpack(Object.assign({}, webpackConfig, {
//       plugins: []
//     })))
//     .pipe(gulp.dest(paths.built.js))
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

// gulp.task('watch-js', () => {
//   gulp.watch(paths.scripts, ['js'])
// })