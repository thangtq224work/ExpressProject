
const Author = require('../../models/Author');
const Book = require('../../models/Book');
const castObject = require('../../utils/castObject')
const authorController = {
    getAuthors: async (req, resp, next) => {
        await Author.find({ available: true }).sort({ name: 1 }).then((authorData) => {
            resp.json(castObject.castObjects(authorData));
        }).catch(err => {
            return resp.status(400).json({ message: "Error" });
        })
    },
    updateAuthor: async (req, resp) => {
        await Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(data => {
            return resp.json(data);
        }).catch(err => {
            return resp.status(400).json({ message: "Error" });
        });
    },
    saveAuthor: async (req, resp) => {
        const author = new Author(req.body);
        const authorSaved = await author.save();
        resp.json(authorSaved);
    },

    deleteAuthor: async (req, resp) => {
        await Book.updateMany({ author: req.params.id }, { author: null });
        await Author.findByIdAndUpdate({ _id: req.params.id }, { available: false }).then(() => {
            return resp.json({ message: "Deleted" });
        }).catch(err => {
            return resp.status(400).json({ message: "Error" });
        });
    },
}
module.exports = authorController;