'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')
// const uglify = require('gulp-uglify')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')
// const webpackConfigServer = require('./webpack.server.config.js')
// const webpackConfigVendor = require('./webpack.vendor.config.js')
const rev = require('gulp-rev')
const mergeStream = require('merge-stream')
const cleanCSS = require('gulp-clean-css')
const _ = require('lodash')
// const ts = require('gulp-typescript')
// const babel = require('gulp-babel')
// const tsProject = ts.createProject('tsconfig.json')
// const concat = require('gulp-concat')
// const sourcemaps = require('gulp-sourcemaps')
// const fs = require('fs')
// const rename = require('gulp-rename')
// const imagemin = require('gulp-imagemin')


const dirBin = 'bin'
const dirBuilt = 'assets/built'
const dirSrc = 'src'
const paths = {
  src: {
    root: dirSrc,
    client: `${dirSrc}/client/**/*.*`,
    scss: [`${dirSrc}/client/shared/scss/**/**/*.scss`],
    img: [`${dirSrc}/client/shared/img/**/*.*`],
    fonts: [`${dirSrc}/client/shared/fonts/*`],
  },
  built: {
    root: dirBuilt,
    img: `${dirBuilt}/img`,
    fonts: `${dirBuilt}/fonts`,
  },
}


// streams /////////////////////////////////////////////////////////////////////
const webpackChunkStream = () => {
  return gulp.src('entry')
    .pipe(webpackStream(Object.assign({}, webpackConfig, {
      plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
        })
      ]
    })))
}

const scriptStream = () => { 
  return webpackChunkStream()
    // .pipe(uglify())
}

const cssStream = () => {
  return gulp
    .src(paths.src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
}


// tasks ///////////////////////////////////////////////////////////////////////
gulp.task('sass.v', () => {
  return gulp.src(paths.src.scss)
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.built.root))
})

gulp.task('images', () => {
  return gulp.src(paths.src.img)
    // TODO
    // .pipe(imagemin())
    .pipe(gulp.dest(paths.built.img))
})

gulp.task('fonts', () => {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.built.fonts))
})

gulp.task('build', () => {
  // const bundleStream = mergeStream(
  //   gulp.src('entry').pipe(webpackStream(webpackConfig))
  // )
  //   .pipe(uglify())

  const revd = mergeStream(scriptStream(), cssStream())
    .pipe(rev())
    .pipe(gulp.dest(paths.built.root))
    .pipe(rev.manifest())
    .pipe(gulp.dest(paths.built.root))

  return revd
})

// // webpack build for server rendering
// gulp.task('webpack.s', () => {
//   return gulp.src('entry')
//     .pipe(webpackStream(webpackConfigServer))
//     .pipe(gulp.dest(dirBin))
// })

// // webpack build for vendor
// gulp.task('webpack.v', () => {
//   return gulp.src('entry')
//     .pipe(webpackStream(webpackConfigVendor))
//     // .pipe(gulp.dest(paths.built.root))
// })

// // webpack watch for server rendering
// gulp.task('webpack.s.w', () => {
//   return gulp.src('entry')
//     .pipe(webpackStream(_.assign({}, webpackConfigServer, {
//       watch: true,
//       progress: true
//     })))
//     .pipe(gulp.dest(dirBin))
// })

gulp.task('default', ['images', 'fonts', 'build', 'webpack.s'])
