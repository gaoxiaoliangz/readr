'use strict'

const gulp = require('gulp')
// const fs = require('fs');
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const webpackStream = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')
// const webpack = require('webpack');
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const rev = require('gulp-rev')
// const rename = require('gulp-rename');
const concat = require('gulp-concat')
const mergeStream = require('merge-stream')
const sourcemaps = require('gulp-sourcemaps')
const cleanCSS = require('gulp-clean-css')
// const imagemin = require('gulp-imagemin');

const assetBuilt = 'assets/built'
const srcDir = 'src'
const paths = {
  prod: {
    assets: '/built/production',
  },
  src: {
    html: [`${srcDir}/html/index.html`],
    scss: [`${srcDir}/scss/**/**/*.scss`],
    es6: [`${assetBuilt}/es6/**/*.js`, `!${assetBuilt}/es6/jspm_packages/**`],
    img: [`${srcDir}/img/**/*.*`],
    fonts: [`${srcDir}/fonts/*`],
  },
  built: {
    root: assetBuilt,
    es6: `${assetBuilt}/es6`,
    es5: `${assetBuilt}/es5`,
    img: `${assetBuilt}/img`,
    fonts: `${assetBuilt}/fonts`,
  },
}

// const manifest = JSON.parse(fs.readFileSync(paths.built.root + '/rev-manifest.json', 'utf8'))

const jsVendor = [
  'node_modules/react/dist/react.min.js',
  'node_modules/react-dom/dist/react-dom.min.js',
]

gulp.task('build-es6', () =>
  tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.built.es6))
)

gulp.task('build-es5', () => {
  return gulp.src(paths.src.es6)
    .pipe(babel())
    .pipe(gulp.dest(paths.built.es5))
})

gulp.task('watch-js', () => {
  gulp.watch(paths.src.es6, ['build-es5'])
})

gulp.task('sass', () => {
  return gulp.src(paths.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.built.root))
})

gulp.task('watch-sass', () => {
  gulp.watch(paths.src.scss, ['sass'])
})

gulp.task('image', () =>
  gulp.src(paths.src.img)
    // TODO
    // .pipe(imagemin())
    .pipe(gulp.dest(paths.built.img))
)

gulp.task('copy-fonts', () =>
  gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.built.fonts))
)


gulp.task('build', () => {
  const bundle = gulp.src('entry')
    .pipe(webpackStream(webpackConfig))

  const vendor = gulp.src(jsVendor)
    .pipe(uglify())
    .pipe(concat('vendor.js', { newLine: ';' }))

  const js = mergeStream(bundle, vendor)
    .pipe(uglify())

  const css = gulp.src(paths.src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))

  const revd = mergeStream(js, css)
    .pipe(rev())
		.pipe(gulp.dest(paths.built.root))
    .pipe(rev.manifest())
    .pipe(gulp.dest(paths.built.root))

  return revd
})

