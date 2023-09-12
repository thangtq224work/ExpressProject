const mongoose = require('mongoose');
// create an schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    birthday: {
        type: Date,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema); 