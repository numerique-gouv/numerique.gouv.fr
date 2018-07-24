const $             = require('gulp-load-plugins')();
const browserSync   = require('browser-sync');
const config        = require('../util/loadConfig').javascript;
const gulp          = require('gulp');
const isProduction  = require('../util/isProduction');
const uglify        = require('gulp-uglify');

gulp.task('javascript', function() {
  browserSync.notify(config.notification);

  return gulp.src(config.src)
    .pipe($.sourcemaps.init())
    .pipe($.babel({presets: ['env']}))
    .pipe($.concat(config.filename))
    .pipe($.if(isProduction, uglify({ mangle: false })))
    .pipe($.if(!isProduction, $.sourcemaps.write()))
    // Write the file to source dir and build dir
    .pipe(gulp.dest(config.dest.jekyllRoot))
    .pipe(gulp.dest(config.dest.buildDir));
});
