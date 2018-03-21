// backendapp/models/contacts.js
// grab the mongoose module

const mongoose = require('mongoose');

const contacts = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('contacts', contacts);