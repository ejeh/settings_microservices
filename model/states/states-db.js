// var mongoose = require("mongoose");
var db = global.db;
var Schema = db.Schema;

var statesSchema = new Schema(
    {

        state_name: {
            type: String
        },
        country_id: {
            type: String
        },
         created: {
            type: Date, default: Date.now
        }

    });


module.exports.statesModel = db.model('states', statesSchema);
