//server.js

// modules =========================================================
var express = require('express');
var expobj = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var mongoose = require('mongoose');

// configuration ===================================================
// backend configuration files
var db = require('./backendconfiguration/db');
// set our port
var port = process.env.PORT || 8080;
// connect to our MongoDB database
// (uncomment aftere you enter your own credentials in config/db.js)
// mongoose.connect(db.url);
// get all data/stuff of the body (POST) parameters
// parse application/json
expobj.use(bodyParser.json());
// parse application/vnd.api+json as json
expobj.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-forum-urlencoded
expobj.use(bodyParser.urlencoded({extended: true}));
// override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
expobj.use(express.static(__dirname + '/public'));

// routes ==========================================================
//gitvdfdf
require('./backendapp/routes')(expobj); // configure our routes

// start app ========================================================
// startup our app at http://localhost:8080
expobj.listen(port);
// shoutout to the user
console.log('\nNode Server has been Started');
console.log('\nTo check it open any web browser and type "localhost:'+port+'" and see the magic');
// expose app
exports = module.exports = expobj;