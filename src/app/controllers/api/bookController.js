const Book = require('../models/Book');
const Author = require('../models/Author');
const castOb = require('../utils/castObject');

let fakeData = [
    {
        key: "HH",
        value: "Hoạt hình"
    },
    {
        key: "TC",
        value: "Truyện cười"
    }, {
        key: "KT",
        value: "Kinh tế"
    }, {
        key: "HT",
        value: "Học thuật"
    }, {
        key: "KD",
        value: "Kinh dị"
    },
    {
        key: "HD",
        value: "Hướng dẫn"
    },
    {
        key: "TT",
        value: "Trinh thám"
    },
]
const bookController = {
    getBooks: async (req, resp, next) => {
        Book.find({ available: true }).populate('author').then(data => {
            resp.json(castOb.castObjects(data));
        }).catch(err => {
            resp.status(400).json({ message: "Error" });
        })
    },
    // newBook: async (req, resp) => {
    //     let authors = [];
    //     await Author.find({ available: true }).then(data => {
    //         authors = castOb.castObjects(data);
    //     })
    //     resp.render('book/create', { authors: authors, typeBook: fakeData });
    // },
    saveBook: async (req, resp) => {
        const book = new Book(req.body);
        const bookSaved = await book.save();
        resp.json(bookSaved);
    },

    updateBook: async (req, resp) => {
        await Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(data => {
            return resp.json(data);
        }).catch(err => {
            resp.status(400).json({ message: 'error' });
        });
    },

    deleteBook: async (req, resp) => {
        await Book.findByIdAndUpdate({ _id: req.params.id }, { available: false }).then(data => {
            return resp.json(data);
        }).catch(err => {
            return resp.status(400).json({ message: "Error" });
        });
    },
}
module.exports = bookController;