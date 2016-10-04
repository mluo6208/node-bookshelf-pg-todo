var express = require('express');
var router = express.Router();

var ItemController = require('../controllers/items');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/items', ItemController.listTodos);


module.exports = router;
