'use strict';

var Bookshelf = require('bookshelf');
var knex = require('knex')({
    client: 'pg',
    debug: true,
    connection: {
      "host"      : "localhost",
      "port"      : 5432,
      "user"      : "postgres",
      "password"  : "Lmx77889",
      "database"  : "items",
      "charset"   : "utf8"
    }
});


var Bookshelf = require('bookshelf')(knex);
var Item = Bookshelf.Model.extend({
  tableName: 'items'
});

Item.collection().fetch().then(function (collection) {
  console.log(collection);
});
