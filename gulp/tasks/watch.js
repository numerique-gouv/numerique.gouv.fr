const browserSync = require('browser-sync');
const WATCH      = require('../util/loadConfig').WATCH;
const gulp        = require('gulp');
// Watch files for changes, recompile/rebuild and reload the browser

// Reload the browser with BrowserSync
function reload(done) {
  browserSync.reload();
  done();
}

gulp.task('watch', function() {
  gulp.watch(WATCH.pages, gulp.series('build', reload));
  gulp.watch(WATCH.javascript, gulp.series('javascript', reload));
  gulp.watch(WATCH.rechercher, gulp.series('rechercher', reload));
  // No browser reload needed here, browserSync injects the stylesheet into browsers
  gulp.watch(WATCH.sass, gulp.series('sass',reload));
  gulp.watch(WATCH.media, gulp.series('copy', reload));
});
