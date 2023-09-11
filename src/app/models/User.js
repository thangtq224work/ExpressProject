// // const mongoose = require('mongoose');
// const mongoose = require('mongoose');
// // create an schema
// const bookSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         maxLength: 255
//     },
//     quantity: {
//         type: Number,
//         required: true
//     },
//     available: {
//         type: Boolean,
//         required: true,
//         default: true
//     },
//     type: {
//         // type: [String],// array string
//         type: String,
//         required: true
//     },
//     publishDate: {
//         type: Date,
//         required: true
//     },
//     author: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Author"
//     }

// }, { timestamps: true });

// module.exports = mongoose.model("Book", bookSchema); 