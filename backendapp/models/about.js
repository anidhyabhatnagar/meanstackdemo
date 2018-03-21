// backendapp/models/about.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our about model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('About', {
    name : {type : String, default: ''}
});