const named = require("vinyl-named");
const yargs = require("yargs");
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const JAVASCRIPT = require('../util/loadConfig').JAVASCRIPT;
const merge = require('webpack-merge');
const log = require('fancy-log');

const PRODUCTION = !!(yargs.argv.production);
const PREPRODUCTION = !!(yargs.argv.preproduction);
const DEVELOPMENT = !!(yargs.argv.development);

const pump = require('pump');

const webpackConfigCommon = {
  output: {
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

const webpackConfigDev = {
  mode: 'development',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: true,
      ALGOLIA_INDEX: 'jekyll-dinsic-dev'
    })
  ]
};

const webpackConfigPreProd = {
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'preproduction', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
      ALGOLIA_INDEX: 'jekyll-dinsic-preprod'
    })
  ]
};

const webpackConfigProd = {
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
      ALGOLIA_INDEX: 'jekyll-dinsic'
    })
  ]
};

gulp.task('javascript', function (cb) {
  let webpackConfig;
  if (PRODUCTION){
    log('webpack in production mode');
    webpackConfig = merge(webpackConfigCommon, webpackConfigProd)
  } else if(PREPRODUCTION) {
    log('webpack in preproduction mode');
    webpackConfig = merge(webpackConfigCommon, webpackConfigPreProd)
  } else if(DEVELOPMENT) {
    log('webpack in development mode');
    webpackConfig = merge(webpackConfigCommon, webpackConfigDev)
  } else {
    log('webpack in undefined mode')
  }
  pump([
    gulp.src(JAVASCRIPT.src),
    named(),
    $.sourcemaps.init(),
    webpackStream(webpackConfig, webpack),
    $.if(PRODUCTION, $.uglify()),
    $.if(!PRODUCTION, $.sourcemaps.write()),
    gulp.dest(JAVASCRIPT.dest.buildDir)
  ],
    cb);
});

