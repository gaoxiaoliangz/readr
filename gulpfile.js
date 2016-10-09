const gulp = require('gulp-help')(require('gulp'))
const imagemin = require('gulp-imagemin')

// examples
gulp.task('images', () => {
  return gulp.src('some/path')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/path'))
})

gulp.task('fonts', () => {
  return gulp.src('some/path')
    .pipe(gulp.dest('dest/path'))
})

// copy tasks
gulp.task('copy:built_prod', () => {
  return gulp.src('./public/built_prod/**/**.**')
    .pipe(gulp.dest('./__production__/public/built_prod'))
})

gulp.task('copy:static', () => {
  return gulp.src('./public/static/**/**.**')
    .pipe(gulp.dest('./__production__/public/static'))
})

gulp.task('copy:bin', () => {
  return gulp.src('./bin/**/**.**')
    .pipe(gulp.dest('./__production__/bin'))
})

gulp.task('copy', ['copy:built_prod', 'copy:static', 'copy:bin'])
