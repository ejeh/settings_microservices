// Import all routers here

var countries = require("./countries.js");
var lga = require("./lga.js");
var states = require("./states.js");


function route(app) {

    countries.route(app);

    states.route(app);

    lga.route(app);



}
module.exports.route = route;