var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var babelify = require('babelify');

gulp.task('browserify', function(){
  return browserify('./src/example.jsx')
    .transform(babelify,{presets: ["react","es2015"]})
    .bundle()
    .pipe(source('example.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {
  gulp.start(['browserify']);
});
