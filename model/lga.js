var lgaDb = require("./lga/lga-db.js");
var lgaMods = lgaDb.lgaModel;



function lga() {
    lga.prototype.create = function (options, callback) {
        var a = new lgaMods(options);
        a.save(function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data !== null ? data.toJSON() : null);
            }
        });
    };


    lga.prototype.findAll = function (callback) {
        lgaMods.find({}, function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        });
    };





    lga.prototype.findById = function (id, callback) {
        lgaMods.findOne({ '_id': id }).lean().exec(function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        });
    };

    lga.prototype.update = function (options, callback) {
        lgaMods.update({ 'state_id': options.id },
            {
                $set: {
                    "lga_name": options.lga_name,
                    "state_id": options.state_id,
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

    lga.prototype.deleteById = function (id, callback) {
        lgaMods.deleteOne({ '_id': id }).lean().exec(function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        });
    };
}


module.exports.lga = lga;