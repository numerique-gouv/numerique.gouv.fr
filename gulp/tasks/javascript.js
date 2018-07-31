const named = require("vinyl-named");
const yargs = require("yargs");
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const webpackStream = require('webpack-stream');
const webpack2 = require('webpack');
const JAVASCRIPT = require('../util/loadConfig').JAVASCRIPT;
const PRODUCTION = !!(yargs.argv.production);

let webpackConfig = {
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
  },
};

gulp.task('javascript', function () {
  return gulp.src(JAVASCRIPT.src)
    .pipe(named())
    .pipe($.sourcemaps.init())
    .pipe(webpackStream(webpackConfig, webpack2))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => {
        console.log(e);
      })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(JAVASCRIPT.dest.buildDir));
});

