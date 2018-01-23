var mysql = require(mysql);

function postItem(name, price) {
        connection.query(
          "INSERT INTO auctionItems SET ?", {
            name: name,
            price: price
        }, function(err, data) {
            if (err) throw err;
        })
      }
