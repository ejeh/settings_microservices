function route(app) {
	app.post('/countries', function (req, res) {
		//res.send('welcome to students module');
		// res.send("yipee na me daser");
		var form = {

			country_name: req.body.country_name

		};

		var Model = require('../model/countries.js').countries;
		var c = new Model();
		c.create(form, function (data) {
			//console.log(data);
			res.json(data);

		});

	});


	app.get('/countries/all', function (req, res, next) {

		var country = require("../model/countries.js").countries;

		var c = new country();

		c.findAll(function (data) {
			res.json(data);
		});
	});


	app.get('/countries/one', function (req, res, next) {

		var country = require("../model/countries.js").countries;

		var c = new country();

		c.findOne(function (data) {
			res.json(data);
		});
	});




	app.get('/countries/l/:id', function (req, res, next) {

		var country = require("../model/countries.js").countries;

		var c = new country();

		if (req.params.id === "") {
			res.json({ "status": "-102", "info": "(id) parameter is required" });
			return;
		}

		var id = req.params.id;
		c.findById(id, function (data) {
			res.json(data);
		});
	});



	app.post('/countries/update/:id', function (req, res) {

		var option = {

			country_name: req.body.country_name

		};

		var country = require("../model/countries.js").countries;

		var c = new country();

		c.update(option, function (data) {
			res.json(data);
		});
	});

	app.get('/countries/one', function (req, res, next) {

		var country = require("../model/countries.js").countries;

		var c = new country();

		c.findOne(function (data) {
			res.json(data);
		});
	});


	app.delete('/countries/delete/:id', function (req, res, next) {

		var country = require("../model/countries.js").countries;

		var c = new country();

		if (req.params.id === "") {
			res.json({ "status": "-102", "info": "(id) parameter is required" });
			return;
		}

		var id = req.params.id;
		c.deleteById(id, function (data) {
			res.json(data);
		});
	});


	app.get("/country/new", function(req, res){
		res.render('form');
	})

	

	app.post("/emitter", function (req, res, next) {
		
		var form = {

			country_name: req.body.countryName,
			state_name: req.body.stateName,
			lga_name: req.body.lgaName

		};
		var country = require('../libs/emitter.js');
		country.once('complete', function (err) {
			if(err){
				res.render("form")
			}else {
				res.redirect("/country/new")
			};
			
			res.json(JSON.stringify(test));
			console.log("E don finish " + test + id);
			res.json(JSON.stringify(test));

		});
		country.countryBootstrap(form);

	});


	// app.post('/country/create', function (req, res, next) {
	// 	var form = {
	// 		country_name: req.body.country_name

	// 	};
	// 	var country = require("../model/countries.js").countries;

	// 	var reg = new country();
	// 	reg.create(form, function (data) {
	// 		res.json(data);
	// 	});
	// });

	// app.post('/state/create', function (req, res, next) {
	// 	var form = {
	// 		state_name: req.body.state_name



	// 	};
	// 	var state = require("../model/states.js").states;

	// 	var reg = new state();
	// 	reg.create(form, function (data) {
	// 		res.json(data);
	// 	});
	// });


	// app.post('/lga/create', function (req, res, next) {
	// 	var form = {
	// 		lga_name: req.body.lga_name



	// 	};
	// 	var lga = require("../model/lga.js").lga;

	// 	var reg = new lga();
	// 	reg.create(form, function (data) {
	// 		res.json(data);
	// 	});
	// });


	// app.get('/forms', function (req, res) {
	// 	res.render('form');
	// });

	// app.get("/form2", function (req, res) {
	// 	res.render('form')
	// })

	// app.post('/countries/new', function (req, res) {
		

	// 	var Model = require('../model/countries.js').countries;
	// 	var c = new Model();
	// 	c.create(data, function (err, data) {
	// 		if(err){
	// 			res.render('form')
	// 		}else {
	// 			res.redirect("/form2")
	// 		}
	// 		// res.json(data);

	// 	});

	// });

}

module.exports.route = route;