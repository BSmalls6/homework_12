// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Burger = require("../models/burgers.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function (req, res) {
    Burger.findAll({
      attributes:["name", "orders"]
    }).then(function (results) {
      res.json(results);
    })

  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:burger", function (req, res) {
    Burger.findAll({
      where: {
        order: req.body.order,
      }
    }).then(function (results) {
      res.json(results);
      console.log("The burger you ordered is: " + res);
    });
  });

 
  app.post("/api/new", function (req, res) {
    Burger.create({
      name: req.body.name,
      order: req.body.order,
    }).then(function (results) {
res.json(results)

    });

  });

  // Add sequelize code to delete a book
  app.delete("/api/burgers/:id", function (req, res) {
    Burger.destroy({
      where: {
        order: req.body.order
      }
    }).then(() => {
      console.log("Order Canceled")
    })
  })


};
