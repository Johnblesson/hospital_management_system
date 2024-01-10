const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        validate: {
            validator: (value) => value.length >= 2 && value.length <= 255,
            message: 'Name must be between 2 and 255 characters.',
          },
    },
    email : {
        type: String,
        required: [true, 'email is required.'],
        unique: true
    },
    password : {
        type: String,
        required: [true, 'Password is required.'],
    },
    gender : String,
    status : String,
    role: String,
});

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;