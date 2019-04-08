const gulp          = require('gulp');
const modernizr = require('gulp-modernizr');
const MODERNIZR = require('../util/loadConfig').MODERNIZR;

gulp.task('modernizr', function() {
  return gulp.src(MODERNIZR.src)
    .pipe(modernizr())
    .pipe(gulp.dest(MODERNIZR.dest.jekyllRoot))
});
