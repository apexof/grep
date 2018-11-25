'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');
// const remember = require('gulp-remember');
const autoprefixer = require('gulp-autoprefixer');
const bSync = require('browser-sync');
// const imageResize = require('gulp-image-resize');
const del = require('del');
const newer = require('gulp-newer');
const debug = require('gulp-debug');
const rigger = require('gulp-rigger');
const ghPages = require('gulp-gh-pages');

gulp.task('serve', function () {
  bSync({
    server: './dist',
    // tunnel: true,
  });
  gulp.watch('./dist/**/*.*').on('change', bSync.reload);
});

gulp.task('html', function () {
  return gulp.src('./app/index.html', { since: gulp.lastRun('html') })
    .pipe(rigger())
    .pipe(gulp.dest('./dist'));
});

gulp.task('assets', function () {
  return gulp.src('./app/assets/**/*', { since: gulp.lastRun('assets') })
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
  return gulp.src('./app/sass/main.sass')
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions']))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    .pipe(cleancss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
  return gulp.src('./app/js/*.js')
    // .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(concat('script.js'))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

// gulp.task('js:libs', function () {
//   return gulp.src('./app/libs/*.js', { since: gulp.lastRun('js:libs') })
//     .pipe(newer('./dist/js/libs'))
//     .pipe(debug({ title: 'js:libs' }))
//     .pipe(gulp.dest('./dist/js/libs'));
// });

gulp.task('watch', function () {
  gulp.watch('./app/sass/**/*.sass', gulp.series('sass'));
  gulp.watch('./app/**/*.html', gulp.series('html'));
  gulp.watch('./app/js/*.js', gulp.series('js'));
});

gulp.task('clean', function () {
  return del('./dist/*');
});

gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('build', gulp.series('clean', gulp.parallel('html', 'assets', 'sass', 'js')));

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
