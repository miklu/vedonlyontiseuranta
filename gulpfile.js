









/******************************************************
# RIIPPUVUUDET
******************************************************/
var gulp = require('gulp'),
  less = require('gulp-less'),
  rename = require('gulp-rename'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  path = require('path');

/******************************************************
# SIJAINNIT
******************************************************/
var kohde = {
  less: 'public/styles/styles.less',
  css: 'public/styles',
  js: 'public/scripts',
  html: 'public/*.html'
};


/******************************************************
# LESS
******************************************************/
gulp.task('less', function() {
  gulp.src(kohde.less)
    .pipe(plumber())
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest(kohde.css))
    .pipe(livereload());
});

/******************************************************
# HTML
******************************************************/
gulp.task('html', function() {
  gulp.src(kohde.html)
    .pipe(livereload());
});

/******************************************************
# WATCH
******************************************************/
gulp.task('watch', function() {

  var server = livereload();

  gulp.watch(kohde.html, ['html']);
  gulp.watch(kohde.less, ['less']);
});

gulp.task('default', ['less', 'watch']);