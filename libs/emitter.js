var util = require("util");
var events = require("events");


var count = function () {
    events.EventEmitter.call(this);
    this.countryBootstrap = function (form) {
        console.log("start");
        var self = this;
        self.emit("start", form);
        // return this;

    }
    this._country = function (form) {
        var self = this;
        var country = {
            country_name: form.country_name
        };

        var coun = require("../model/countries.js").countries;
        console.log('country');
        var count = new coun();
        count.create(country, function (data) {
            self.emit("done_country", form, data._id);
        });

    };
    this._state = function (form, id) {
        console.log("state" + id);
        var self = this;
        var state = {
            state_name: form.state_name,
            country_id: id
        }
        var sta = require("../model/states.js").states;
        var stat = new sta();
        stat.create(state, function (data) {
            self.emit("done_state", form, data, id);


        })
    };

    this._lga = function (form, id) {
        console.log("i am the one " + id);
        var self = this;
        var lgaf = {
            lga_name: form.lga_name,
            
            
        };

        var lgas = require("../model/lga.js").lga;
        var lg = new lgas();
        lg.create(lgaf, function (data) {
            console.log(data);
            self.emit("complete", form, id);
        });
    };
    this.on("start", this._country);
    this.on("done_country", this._state);
    this.on("done_state", this._lga);



}
util.inherits(count, events.EventEmitter);
module.exports = new count();