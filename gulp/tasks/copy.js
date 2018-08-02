const browserSync   = require('browser-sync');
const COPY        = require('../util/loadConfig').COPY;
const gulp          = require('gulp');

gulp.task('copy', function() {
  browserSync.notify(COPY.notification);
  return gulp.src(COPY.assets)
    .pipe(gulp.dest(COPY.dist));
});
