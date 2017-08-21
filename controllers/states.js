function route(app) {
    app.post('/states', function (req, res) {
        //res.send('welcome to students module');
        //res.send("yipee na me daser");
        //1) import the model of country here // no need again
        //2) use the function find one with the findOne
        //3) assign the output.id into a variable 
        //4) construct a new object with the object.id as country_id

        // var count = require("../model/countries.js").countries;

        // var ca = new count();
        // var datavariable;
        // var opt = {
        //     country_name: req.body.country_name
        // }
		// ca.findOne(opt, function (data) {
		// 	res.json(data);
        //     // return datavariable = data
		// });

        // var option = {
        //     country_id:datavariable.id,
        //     state: req.body.state
        // }

        var option = {

            state_name: req.body.state_name,
            country_id: req.body.country_id

        };
        var Model = require('../model/states.js').states;
        var c = new Model();
        c.create(option, function (data) {
            //console.log(data);
            res.json(data);
        });

    });

    app.get('/states/all', function (req, res, next) {

        var states = require("../model/states.js").states;

        var c = new states();

        c.findAll(function (data) {
            res.json(data);
        });
    });

    app.get('/states/l/:id', function (req, res, next) {

        var states = require("../model/states.js").states;
        var c = new states();

        if (req.params.id === "") {
            res.json({ "status": "-102", "info": "(id) parameter is required" });
            return;
        }

        var id = req.params.id;
        c.findById(id, function (data) {
            res.json(data);
        });
    });

    app.post('/states/update/:id', function (req, res) {

        var option = {

            state_name: req.body.state_name,
            country_id: req.body.country_id

        };

        var state = require("../model/states.js").states;

        var c = new state();

        c.update(option, function (data) {
            res.json(data);
        });
    });
    app.delete('/states/delete/:id', function (req, res, next) {

        var states = require("../model/states.js").states;
        var c = new states();

        if (req.params.id === "") {
            res.json({ "status": "-102", "info": "(id) parameter is required" });
            return;
        }

        var id = req.params.id;
        c.deleteById(id, function (data) {
            res.json(data);
        });
    });

}
module.exports.route = route;