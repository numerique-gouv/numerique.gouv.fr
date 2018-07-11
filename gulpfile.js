var requireDir = require('require-dir');
const gulp = require('gulp');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });


gulp.task('build',
  gulp.series('clean', 'jekyll-build',
    gulp.parallel('sass', 'javascript', 'rechercher', 'copy')))

gulp.task('default', gulp.series('build', 'browser-sync', 'watch'))


