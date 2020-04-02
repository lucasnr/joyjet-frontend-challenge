const { src, dest, series, parallel } = require('gulp'),
  clean = require('gulp-clean'),
  htmlmin = require('gulp-htmlmin'),
  inlinesource = require('gulp-inline-source'),
  minify = require('gulp-minify');

function cleanDist() {
  return src('dist/', { read: false }).pipe(clean());
}

function copyDist() {
  return src('src/**/*').pipe(dest('dist/'));
}

function minifyHtml() {
  return src('dist/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));
}

function minifyJs() {
  return src('src/**/*.js')
    .pipe(
      minify({
        ext: {
          min: '.js'
        },
        noSource: true
      })
    )
    .pipe(dest('dist/'));
}

function inlineJs() {
  return src('src/**/*.html')
    .pipe(inlinesource())
    .pipe(dest('dist/'));
}

exports.default = series(
  cleanDist,
  copyDist,
  inlineJs,
  parallel(minifyJs, minifyHtml)
);
