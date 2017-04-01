const gulp = require('gulp')
const ts = require('gulp-typescript')
// const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('es5', () => {
  return tsProject.src()
    .pipe(tsProject())
    // .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
      plugins: []
    }))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/es5_gulp'))
})

gulp.task('default', ['es5'])

gulp.task('watch:es', () => {
  const watcher = gulp.watch('src/**/*.ts', ['es5'])
  watcher.on('change', (event) => {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
  })
})
