const yargs = require("yargs");
const $ = require('gulp-load-plugins')();
const browser = require('browser-sync');
const RECHERCHER = require('../util/loadConfig').RECHERCHER;
const gulp = require('gulp');
const uglify = require('gulp-uglify');

const PRODUCTION = !!(yargs.argv.production);

gulp.task('rechercher', function() {
  browser.notify(RECHERCHER.notification);

  return gulp.src(RECHERCHER.src)
    .pipe($.sourcemaps.init())
    .pipe($.babel({"presets": ["es2015-script"]}))
    .pipe($.concat(RECHERCHER.filename))
    .pipe($.if(PRODUCTION, uglify({ mangle: false })))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    // Write the file to source dir and build dir
    .pipe(gulp.dest(RECHERCHER.dest.buildDir));
});
