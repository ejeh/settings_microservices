// countries schema/database imported here
var countriesDb = require("./countries/countries-db.js");
// this is to get specific objects exported
var countriesMods = countriesDb.countriesModel;



function countries() {
    countries.prototype.create = function (options, callback) {
        var a = new countriesMods(options);
        a.save(function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data !== null ? data.toJSON() : null);
            }
        })
    };

    countries.prototype.findAll = function (callback) {
        countriesMods.find({}, function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        })
    };


    countries.prototype.findOne = function (callback) {
        countriesMods.findOne({}, function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        })
    };


    countries.prototype.findById = function (id, callback) {
        countriesMods.findById({ '_id': id }).lean().exec(function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(data);
            }
        });
    };


    countries.prototype.update = function (options, callback) {
        countriesMods.update({ 'oid': options.id },
            {
                $set: {
                    "country_name": options.country_name

                }
            },
            function (err, data) {
                if (err) {
                    callback(err)
                } else {
                    callback(data)
                }
            });

    };


    countries.prototype.deleteById = function(id, callback){
        countriesMods.deleteOne({'_id':id}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };
};



module.exports.countries = countries;