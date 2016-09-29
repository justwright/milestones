'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');

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
);

gulp.task('js', () => {
	browserify({
    	entries: './src/js/partials/index.js',
    	debug: true
  	})
    .transform(babelify)
    .on('error',gutil.log)
    .bundle()
    .on('error',gutil.log)
    .pipe(source('milestones.js'))
    .pipe(gulp.dest('./src/js'));
});

gulp.task('build-html', () => {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-css', ['scss'], () => {
  gulp.src('./src/**/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-js', ['js'], () => {
  gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build-assets', () => {
  gulp.src('./src/assets/**')
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('build', ['build-css', 'build-js', 'build-html', 'build-assets']);

gulp.task('watch', () => {
  gulp.watch('./src/styles/**/*.scss', ['scss']);
  gulp.watch('./src/**/*.js', ['js']);
});
