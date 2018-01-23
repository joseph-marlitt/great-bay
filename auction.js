var inquirer = require("inquirer");
var mysql = require("mysql");



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
