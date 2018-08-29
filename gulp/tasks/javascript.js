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

const pump = require('pump');

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

gulp.task('javascript', function (cb) {
  pump([
    gulp.src(JAVASCRIPT.src),
    named(),
    $.sourcemaps.init(),
    webpackStream(webpackConfig, webpack2),
    $.babel({presets: ['es2015']}),
    $.if(PRODUCTION, $.uglify()),
    $.if(!PRODUCTION, $.sourcemaps.write()),
    gulp.dest(JAVASCRIPT.dest.buildDir)
  ],
    cb);
});

