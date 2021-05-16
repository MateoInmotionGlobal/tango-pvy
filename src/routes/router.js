var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send({result: 'is working'})
});

module.exports = router;
