var browserSync = require('browser-sync');
var BROWSERSYNC      = require('../util/loadConfig').BROWSERSYNC;
var gulp        = require('gulp');

gulp.task('browser-sync', function(done) {
  browserSync.init({
    notify: BROWSERSYNC.notify,
    open: BROWSERSYNC.open,
    port: BROWSERSYNC.port,
    server: {
      baseDir: BROWSERSYNC.server.basedir
    },
    xip: BROWSERSYNC.xip
  });
  done();
});
