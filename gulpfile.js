'use strict';

const requireDir = require('require-dir');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

function buildStyles() {
  return gulp.src('../../sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('../../sass/**/*.scss', ['sass']);
};

gulp.task('build',
  gulp.series('clean', 'jekyll-build', 'modernizr',
    gulp.parallel('javascript', 'copy')));

gulp.task('default', gulp.series('build','browser-sync', 'watch'));
