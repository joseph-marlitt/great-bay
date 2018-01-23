var inquirer = require("inquirer");
var mysql = require("mysql");

// When ready to post an item, just run post(item name, item price)
var post = require("./post.js");


var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "server"
});

prompt
