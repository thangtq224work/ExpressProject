
const Author = require('../models/Author');
const castObject = require('../utils/castObject')
const authorController = {
    getAuthors: async (req, resp, next) => {
        await Author.find({}).then((authorData) => {
            resp.render('author/list', { authors: castObject.castObjects(authorData) });
        }).catch(err => {
            next(err)
        })
    },
    newAuthor: async (req, resp) => {
        resp.render('author/create');
    },

    editAuthor: async (req, resp) => {
        await Author.findById(req.params.id).then((author) => {
            return resp.render('author/edit', { author: castObject.castObject(author) });
        }).catch(err => {
            return resp.status(400).json({ message: "Error" });
        });
    },


    updateAuthor: async (req, resp) => {
        await Author.findOneAndUpdate({ _id: req.params.id }, req.body,{new:true}).then(data => {
            return resp.redirect("/author");
        }).catch(err => {
            return resp.status(400).json({ message: "Error" });
        });
    },
    saveAuthor: async (req, resp) => {
        const author = new Author(req.body);
        const authorSaved = author.save();
        resp.redirect('/author');
    },
}
module.exports = authorController;