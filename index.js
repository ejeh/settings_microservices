global.db = require('./libs/db/db.js')();

var express = require("express");
var methodOverride = require("method-override");
var compress = require("compression");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


var app = express();


var router = require('./controllers/router.js');
app.enabled('trust proxy');

//  Use all the following middlewares before the calling the home page.
app.use(logger('dev'));
app.use(compress());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine', 'pug');
app.set('views','views');

var port = process.env.PORT || 3092;
var ip = process.env.IP || '127.0.0.1';
app.listen(port,ip);


app.get('/', function(req,res){
	 res.send('WELCOME');
});	 

// This allows you use the route funtions in the controller by exporting express to the route files using app.
router.route(app);
console.log("server started at " + ip + " and the port is " + port);



// mongoose.connect("mongodb://localhost/settings_microservices", function (err) {
//     if (err) {
//         console.log("ERROR");
//     } else {
//         console.log("Server is running");
//     }
// })

