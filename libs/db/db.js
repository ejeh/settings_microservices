/**
 * @author - Godfrey Ejeh
 * @description - This file will connect to be mondb
 * and return an instance of my database
 */

// when pushing to github its ignores pushing this
// nodule_modules
// libs/db/db.js


/**
 * @module Library
 * */
var mongoose = require('mongoose');
//var pureautoinc = require("mongoose-pureautoinc");
//var url = require('url');




var CONN_DISCONNECTED = 0,
    CONN_DISCONNECTING = 3,
    CONN_CONNECTED = 1;


var MONGOHQ_URI = 'mongodb://admin:magickiss17A#@ds013564.mlab.com:13564/settings_microservices';


var openConnection = function(callback) {

    if (mongoose.connection === undefined ||
                    mongoose.connection.readyState === CONN_DISCONNECTED ||
                    mongoose.connection.readyState === CONN_DISCONNECTING) {
        
        mongoose.connection.on('connected', function() {

            console.log('Db connected');
            
            if (callback) {
                callback(true);
            }
        });

        mongoose.connection.on('error', function(e) {
            console.log('Db connection error');
            if (callback) {
                callback(e);
            }else {
                console.log(e);
            }
        });
        
        mongoose.connect(MONGOHQ_URI);
    }else {
        if (callback) {
            callback(true);
        }
    }
    
};

var closeConnection = function () {
    if (mongoose.connection && mongoose.connection.readyState === CONN_CONNECTED) {
        mongoose.disconnect();
        
        mongoose.connection.removeAllListeners('connected');
        
        mongoose.connection.removeAllListeners('error');
    }
};

/**
 * core database class exposing Mongoose object after making connection
 * @class Db
 * */
function Db(callback) {
    this.close = function() {
        closeConnection();
    };
    
    this.open = function(callback) {
        openConnection(callback);
        return mongoose;
    };
    
    //Let mongoose open and close the connection as we like.
    mongoose.open  = function(callback) {
        openConnection(callback);
        return mongoose;
    };
    
    mongoose.close = function() {
      closeConnection();  
    };
    
    openConnection(callback);
    
    return mongoose;
}

/***
 * dragintcore-test-db | { _id: ObjectId("51c8a1d73111c7409510fc7f"), user: "draguser", pwd: "10c4577030475b1ae417d28bdd22b7fa", readOnly: false }
 * dragintweb-test-db | { _id: ObjectId("51c8a20d9232add66627da6c"), user: "draguser", pwd: "10c4577030475b1ae417d28bdd22b7fa", readOnly: false }
 * */
//Just export the function and do not initialize so that 
//I have to explicitly do that in order to be a able to plug a callback
module.exports = Db;


