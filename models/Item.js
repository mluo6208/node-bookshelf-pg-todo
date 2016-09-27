var Bookshelf = require('./base');
var _ = require('lodash');



var Item = Bookshelf.Model.extend({
  tableName: 'items'
});

module.exports = Item;
