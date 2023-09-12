
// const Author = require('../models/Author');
// const castObject = require('../utils/castObject')
const authController = {
    getAuthors: async (req, resp, next) => {
        await Author.find({}).then((authorData) => {
            resp.render('author/list', { authors: castObject.castObjects(authorData) });
        }).catch(err => {
            next(err)
        })
    },
    loginPage: async (req, resp, next) => {
        resp.render('page/login');
    },

}
module.exports = authController;