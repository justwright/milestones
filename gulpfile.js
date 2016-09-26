'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

gulp.task('scss', () =>
  gulp.src('./src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
          }))
    .pipe(sourcemaps.write())
    .pipe(rename('milestones.css'))
    .pipe(gulp.dest('./src/styles'))
    .pipe(gulp.dest('./dist/styles'))
);

gulp.task('build-html', () => {
    gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () =>
  gulp.watch('./src/styles/**/*.scss', ['scss'])
);
