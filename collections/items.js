var Bookshelf = require('../models/base');
var Item = require('../models/item');

var Items = Bookshelf.Collection.extend({
  model: Item

});

module.exports = Items;
