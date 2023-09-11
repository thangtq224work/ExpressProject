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
            resp.render('book/list', { books: castOb.castObjects(data) });
        }).catch(err => {
            resp.redirect('/error');
        })
    },
    newBook: async (req, resp) => {
        let authors = [];
        await Author.find({available:true}).then(data => {
            authors = castOb.castObjects(data);
        })
        resp.render('book/create', { authors: authors, typeBook: fakeData });
    },
    saveBook: async (req, resp) => {
        const book = new Book(req.body);
        await book.save();
        resp.redirect('/book');
    },

    editBook: async (req, resp) => {
        let authors = [];
        await Author.find({available:true}).then(data => {
            authors = castOb.castObjects(data);
        })
        await Book.findById(req.params.id).then((book) => {
            const castedBook = castOb.castObject(book);
            castedBook.author = castedBook.author?.toString();
            return resp.render('book/edit', { book: castedBook, authors: authors, typeBook: fakeData });
        }).catch(err => {
            console.log(err);
            resp.redirect('/error');
        });
    },

    updateBook: async (req, resp) => {
        await Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(data => {
            return resp.redirect("/book");
        }).catch(err => {
            // return resp.status(400).json({ message: "Error" });
            resp.redirect('/error');
        });
    },

    deleteBook: async (req, resp) => {
        // await Author.updateMany({ book: req.params.id }, { book: null });
        await Book.findByIdAndUpdate({ _id: req.params.id }, { available: false }).then(data => {
            return resp.redirect("/book");
        }).catch(err => {
            resp.redirect('/error');
            // return resp.status(400).json({ message: "Error" });
        });
        // await Book.findByIdAndDelete({ _id: req.params.id }).then(data => {
        //     return resp.redirect("/book");
        // }).catch(err => {
        //     return resp.status(400).json({ message: "Error" });
        // });
    },
}
module.exports = bookController;