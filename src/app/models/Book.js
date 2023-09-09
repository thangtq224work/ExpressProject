// const mongoose = require('mongoose');
const mongoose = require('mongoose');
// create an schema
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255
    },
    quantity: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    type: {
        type:[String] ,// array string
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author"
    }

});

module.exports = mongoose.model("Book", bookSchema); 