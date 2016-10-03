var _ = require('lodash');
var config = require('../config')

var knex = require('knex')({
  client: 'pg',
  debug: true,
  connection: {
    "host"      : "localhost",
    "port"      : 5432,
    "user"      : "Arthur",
    "password"  : "Lmx77889",
    "database"  : "todo",
    "charset"   : "utf8"
    }
});

var Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry');

module.exports = Bookshelf;
var Item = Bookshelf.Model.extend({
  tableName: 'items'
});


