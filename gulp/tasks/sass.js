const browser       = require ("browser-sync");
const yargs         = require ('yargs');
const $             = require('gulp-load-plugins')();
const gulp          = require('gulp');
const sass          = require('gulp-sass');
const COMPATIBILITY = require('../util/loadConfig').COMPATIBILITY;
const SASS          = require('../util/loadConfig').SASS;
const PRODUCTION = !!(yargs.argv.production);


gulp.task('sass', function() {
  return gulp.src(SASS.src)
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: SASS.include
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    // Comment in the pipe below to run UnCSS in production
    //.pipe($.if(PRODUCTION, $.uncss(UNCSS_OPTIONS)))
    .pipe($.if(PRODUCTION, $.cleanCss({ compatibility: 'ie9' })))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(SASS.dest.jekyllRoot))
    .pipe(gulp.dest(SASS.dest.buildDir))
    .pipe(browser.reload({ stream: true }));
});

