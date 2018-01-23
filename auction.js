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

inquirer.prompt([
{
  type: "list",
  name: "choice",
  message: "Pick your poison: ",
  choices: [
    'POST AN ITEM',
    new inquirer.Separator(),
    'BID ON AN ITEM'
  ]
}
])
.then(function(response) {
  if (response.choice === 'POST AN ITEM') {
    console.log("post test");
  } else if (response.choice === 'BID ON AN ITEM') {
    console.log("bid test");
  }
});
