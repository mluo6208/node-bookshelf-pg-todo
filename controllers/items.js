/**
 * Created by ArthurLa on 22/09/2016.
 */

var ItemService = require('../services/item');


module.exports.createTodo = function (req, res, next){ 
    ItemService.create();

    return res.render
};

module.exports.listTodos = function (req, res, next) {
    ItemService.getItems([], function(err, items) {

      if (err) {
        return err;
      }

      data = {items: items};
      res.render('items', data);
    })
};

module.exports.findTodoById = function (req, res, next) {
    var id = req.body.id;

    ItemService.getItemById(id, function(item, cb) {
        if (err) {
          return console.error('Can not find item', err);
        }
        res.render('index', item);
    });
};