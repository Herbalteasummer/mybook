var mysql=require("mysql");

var connection = mysql.createConnection({
	host  : "localhost",
	user :  "root",
	password: "123123",
	database: "books"
});

connection.connect();

module.exports = connection;