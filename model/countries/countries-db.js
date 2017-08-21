
// var mongoose = require("mongoose");
var db = global.db;
var Schema = db.Schema;


var countriesSchema = new Schema({

  country_name: {
    type: String
  },
  created: {
    type: Date, default: Date.now
  }
});


module.exports.countriesModel = db.model('countries', countriesSchema);