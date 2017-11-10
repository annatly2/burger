//required dependencies
var express = require("express");
var router = express.Router();
//imports burger.js model in order to use its database functions
var burger = require("../models/burger.js");

//creates routes and logic
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", 
  ], [
    req.body.burger_name, 
  ], function(data) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect("/");
  });
});

//exports route for use in server.js
module.exports = router;