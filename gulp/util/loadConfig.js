const fs          = require('fs');
const yaml        = require('js-yaml');

function loadConfig() {
  const ymlFile = fs.readFileSync('gulp/config.yml', 'utf8');
  return yaml.load(ymlFile);
}

const config = loadConfig();

module.exports = config;
