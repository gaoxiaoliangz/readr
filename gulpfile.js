const gulp = require('gulp-help')(require('gulp'))
const imagemin = require('gulp-imagemin')
// const base = require('./webpack/base')
// const paths = base.vars.paths
// const fs = require('fs')
// const rename = require('gulp-rename')

gulp.task('images', () => {
  return gulp.src('some/path')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/path'))
})

gulp.task('fonts', () => {
  return gulp.src('some/path')
    .pipe(gulp.dest('dest/path'))
})

gulp.task('default', ['images', 'fonts'])
