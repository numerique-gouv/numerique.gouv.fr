const gulp          = require('gulp');
const modernizr = require('gulp-modernizr');
const config = require('../util/loadConfig').modernizr;

gulp.task('modernizr', function() {
  return gulp.src(config.src)
    .pipe(modernizr())
    .pipe(gulp.dest(config.dest.jekyllRoot))
});
