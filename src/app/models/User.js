const mongoose = require('mongoose');
const UserRole = require('../../const/UserRole');
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
    },
    role: {
        type: String,
        required: true,
        default: UserRole.USER
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema); 