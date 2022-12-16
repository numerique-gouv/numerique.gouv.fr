'use strict';

const requireDir = require('require-dir');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

const browser       = require ("browser-sync");
const yargs         = require ('yargs');
const $             = require('gulp-load-plugins')();

const COMPATIBILITY = require('./gulp/util/loadConfig').COMPATIBILITY;
const SASS          = require('./gulp/util/loadConfig').SASS;
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

gulp.task('build',
  gulp.series('clean', 'jekyll-build', 'modernizr',
    gulp.parallel('javascript', 'copy')));

gulp.task('default', gulp.series('build','browser-sync', 'watch'));
