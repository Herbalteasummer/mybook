var express = require('express');
var router = express.Router();
var connection = requite("../db/mysqlOpr.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  	connection.query("select * from books",function(err,rows,fileds){
  		console.log(rows);
  	})
});

module.exports = router;