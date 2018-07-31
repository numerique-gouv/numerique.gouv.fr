const CLEAN       = require('../util/loadConfig').CLEAN;
const rimraf      = require('rimraf');
const gulp        = require('gulp');

gulp.task('clean', function(done) {
  rimraf(CLEAN, done);
  done();
});
