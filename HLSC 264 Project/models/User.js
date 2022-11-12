const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
    },
    firstName: { 
        type: String 
    },
    lastName: { 
        type: String
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = User = mongoose.model('user', UserSchema);