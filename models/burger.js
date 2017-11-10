//imports ORM to implement functions that interact with the database
var orm = require("../config/orm.js");

//creates burger object
var burger = {
  //selects all burger table entries
  selectAll: function(cb){
    orm.selectAll("burgers", function (res){
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb){
    orm.insertOne("burgers", cols, vals, function(res){
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb){
    orm.updateOne("burgers", objColVals, condition, function(res){
      cb(res);
    });
  }
};

//exports database functions for controller (burgerController.js) use
module.exports = burger;