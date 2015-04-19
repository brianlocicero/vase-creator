/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
	uglify = require('gulp-uglify'),
    gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function() {
  //return gutil.log('Gulp is running!');
  gulp.src('./js/app-es5.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});