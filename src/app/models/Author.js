// const mongoose = require('mongoose');
const mongoose = require('mongoose');
// create an schema
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255
    },
    homeTown: {
        type: String,
        required: true,
        maxLength: 255
    },
    birthday: {
        type: Date,
        required: true
    },
    gender: {
        type:Boolean,
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }

},{ timestamps: true });

module.exports = mongoose.model("Author", authorSchema); 