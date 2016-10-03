/**
 * Created by ArthurL on 22/09/2016.
 */

var ItemService = require('../services/item');


module.exports.createTodo = function (req, res, next){ 
    ItemService.create();

    return res.render
};

module.exports.listTodos = function (req, res, next) {
    ItemService.getItems([], function(err, items) {
        console.log(items);
        res.render('index', items);
    })
};