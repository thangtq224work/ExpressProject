// const mongoose = require('mongoose');
const mongoose = require('mongoose');
// create an schema
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255
    },
    year: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    gender: {
        type:Boolean,
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }

});

module.exports = mongoose.model("Author", authorSchema); 