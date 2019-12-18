var express = require("express");

var router = express.Router();

var burger = require("../models/burgers");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "Name","Order"
  ], [
    req.body.name, req.body.order
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.delete("/api/burgers", function(req, res){
  burger.delete([


    
  ])
})



// Export routes for server.js to use.
module.exports = router;
