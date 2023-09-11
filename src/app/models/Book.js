const mongoose = require('mongoose');
const slugGenerator = require('mongoose-slug-updater');
// create an schema
mongoose.plugin(slugGenerator);
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
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    type: {
        // type: [String],// array string
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    slug: { type: String, slug: ["name"], unique:true }

}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema); 