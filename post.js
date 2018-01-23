var mysql = require(mysql);

var post = function(name, price) {
        connection.query(
          "INSERT INTO auctionItems SET ?", {
            name: name,
            price: price
        }, function(err, data) {
            if (err) throw err;
        })
      };
      
module.exports post();