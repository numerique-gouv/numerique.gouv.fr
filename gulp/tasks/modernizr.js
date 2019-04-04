const gulp          = require('gulp');
const modernizr = require('gulp-modernizr');
const MODERNIZR = require('../util/loadConfig').MODERNIZR;
const newer = require('gulp-newer');

gulp.task('modernizr', function() {
  return gulp.src(MODERNIZR.src)
    .pipe(newer({dest: 'assets/js/',ext:'.js'}))
    .pipe(modernizr())
    .pipe(gulp.dest(MODERNIZR.dest.jekyllRoot))
});
