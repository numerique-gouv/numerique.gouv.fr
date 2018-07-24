const browserSync = require('browser-sync');
const config      = require('../util/loadConfig').watch;
const gulp        = require('gulp');
// Watch files for changes, recompile/rebuild and reload the browser

// Reload the browser with BrowserSync
function reload(done) {
  browserSync.reload();
  done();
}

gulp.task('watch', function() {
  gulp.watch(config.pages, gulp.series('build', reload));
  gulp.watch(config.javascript, gulp.series('javascript', reload));
  gulp.watch(config.rechercher, gulp.series('rechercher', reload));
  // No browser reload needed here, browserSync injects the stylesheet into browsers
  gulp.watch(config.sass, gulp.series('sass',reload));
  gulp.watch(config.media, gulp.series('copy', reload));
});
