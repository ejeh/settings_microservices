
// var mongoose = require("mongoose");
var db = global.db;
var Schema = db.Schema;




var lgaSchema = new Schema(
    {
        
        lga_name:{
            type: String
        },
        state_id:{
            type: String
        },
        created: {
            type: Date, default: Date.now
        }
       
    }
);


module.exports.lgaModel = db.model('lga', lgaSchema);
