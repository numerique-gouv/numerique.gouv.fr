const browser = require("browser-sync") ;
const yargs= require("yargs");
const JEKYLL        = require('../util/loadConfig').JEKYLL;
const gulp          = require('gulp');
const spawn         = require('cross-spawn');

const PRODUCTION = !!(yargs.argv.production);
const PREPRODUCTION = !!(yargs.argv.preproduction);

gulp.task('jekyll-build', function(done) {
  const processEnv = process.env;
  if (PRODUCTION) {
    processEnv.JEKYLL_ENV = 'production';
  } else if (PREPRODUCTION){
    processEnv.JEKYLL_ENV = 'preproduction';
  } else {
    processEnv.JEKYLL_ENV = 'development';
  }

  browser.notify(JEKYLL.notification);

  // Spawn jekyll commands
  return spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit', env:processEnv})
    .on('close', done);
});
