// backendapp/routes.js

// grab the nerd model we just created
var About = require('./models/about');
    module.exports = function(expobj) {
        // server routes =================================================
        // handle things like api calls
        // authentication routes
        // sample api route
        expobj.get('./api/abouts', function(req, res) {
            // use mongoose to get all the data in the database 
            About.find(function(err, abouts){
                // if there is an error retrieving, send the error
                // nothing after res.send(err) will execute
                if(err)
                    res.send(err);
                
                res.json(abouts); // return all data in JSON format
            });
        });
        
        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)
        
        // frontend routes ===============================================
        // route to handle all angular requests
        expobj.get('*', function(req,res){
            res.sendFile('./public/index.html'); // load or public/index.html file
        });
    };