var statesDb = require("./states/states-db.js");
var statesMods = statesDb.statesModel;



function states() {
    states.prototype.create = function (options, callback) {
        var a = new statesMods(options);
        a.save(function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data !== null ? data.toJSON() : null);
            }
        })
    };


    states.prototype.findAll = function (callback) {
        statesMods.find({}, function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        })
    };



    states.prototype.findById = function (id, callback) {
        statesMods.findById({ '_id': id }).lean().exec(function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        });
    };


    states.prototype.update = function (options, callback) {
        statesMods.update({'country_id': options.id},
            {
                $set: {
                    "state_name": options.state_name,
                    "country_id": options.country_id
                }
            }, function (err, data) {
                if (err) {
                    callback(err)
                } else {
                    callback(data)
                }
            });

    };
    states.prototype.deleteById = function (id, callback) {
        statesMods.deleteOne({ '_id': id }).lean().exec(function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        });
    };
}


module.exports.states = states;