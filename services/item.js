/**
 * Created by ArthurL on 26/09/2016.
 */
'use strict';

var Item = require('./models/item');


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

module.exports = {
    create: create
};