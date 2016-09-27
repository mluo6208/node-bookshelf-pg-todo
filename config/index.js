var convict = require('convict');

var fs = require('fs');
var resolve = require('path').resolve

var conf = convict({
  env: {
    doc: 'The application environment.',
    format: ['development', 'production', 'staging', 'test'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env'
  },

  db: {
    "host"      : "localhost",
    "port"      : 5432,
    "user"      : "postgres",
    "password"  : "Lmx77889",
    "database"  : "items",
    "charset"   : "utf8"
}});

var env = conf.get('env');

var environmentConfig = resolve(__dirname, './env/' + env + '.json');


if (fs.existsSync(environmentConfig)) {
  conf.loadFile(environmentConfig);
}

var overridesConfig = resolve(__dirname, './env/overrides.json');

if (fs.existsSync(overridesConfig)) {
  console.log('Loading overrides config ' + overridesConfig);

  conf.loadFile(overridesConfig);
}

// perform validation

conf.validate();

module.exports = conf;
