function route(app) {
    app.post('/lga', function (req, res) {
        //res.send('welcome to students module');
        //res.send("yipee na me daser");
        var option = {

            lga_name: req.body.lga_name,
            state_id: req.body.state_id,
            country_id: req.body.country_id

        };
        var Model = require('../model/lga.js').lga;
        var c = new Model();
        c.create(option, function (data) {
            //console.log(data);
            res.json(data);
        });

    });

    app.get('/lga/all', function (req, res, next) {

        var country = require("../model/lga.js").lga;

        var c = new country();

        c.findAll(function (data) {
            res.json(data);
        });
    });






    app.get('/lga/l/:id', function (req, res, next) {

        var D = require("../model/lga.js").lga;

        var c = new D();

        if (req.params.id === "") {
            res.json({ "status": "-102", "info": "(id) parameter is required" });
            return;
        }

        var id = req.params.id;
        c.findById(id, function (data) {
            res.json(data);
        });
    });

    app.post('/lga/update/:id', function (req, res) {

		var option = {

			lga_name: req.body.lga_name,
            state_id: req.body.state_id,
            country_id:req.body.country_id

		};

		var country = require("../model/lga.js").lga;

		var c = new country();

		c.update(option, function (data) {
			res.json(data);
		});
	});

    app.delete('/lga/delete/:id', function (req, res, next) {

        var D = require("../model/lga.js").lga;

        var c = new D();

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
