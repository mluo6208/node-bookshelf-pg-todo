/**
 * Created by ArthurL on 26/09/2016.
 */
'use strict';

var Item = require('../models/item');
var Items = require('../collections/items')

//creat an item
var create = function(data, cb){
    Item
        .forge(data)
        .save()
        .then(function (item) {
            return cb(null, item.toJSON());
        })
        .catch(function (err) {
            console.log(err);
            var error = new Error('Failed to create new Item');
            return cb(err, null);
        });

};

// return all the items
var getItems = function(option, cb) {
    Items.forge()
        .fetch(option)
        .then(function (items) {
            if (items) {
                return cb(null, items.toJSON());
            } else {
               return cb(null, []);
            }
    })
    .catch(function (err) {
        console.log(err);
        return cb(err, null);
    })
};

// Ultimate search function
var getItemByWhere = function(where, option, cb) {
    Item.forge(where)
        .fetch(option)
        .then(function (item) {
            return cb(null, item);
        })
        .catch(function (err) {
            return cb(err, null);
    });
};

//search item based on id
var getItemById = function(id, cb) {
    getItemByWhere({id: id}, cb);
};


module.exports = {
    create: create,
    getItemById: getItemById,
    getItems: getItems
};