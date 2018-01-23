

function bidItem(bid, item) {
    console.log("You big on " + item);
    var query = connection.query(
      "UPDATE bid SET ? WHERE ?",
      [
        {
          item: item,
          bid: bid
        }
      ],
      function(err, res) {
        console.log("Bid successful!");
        // Call deleteProduct AFTER the UPDATE completes
      }
    );