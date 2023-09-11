const route = require('express').Router();
const authorController = require('../../app/controllers/authorController')
route.get('/',authorController.getAuthors);
route.get('/new',authorController.newAuthor);
route.get('/edit/:id',authorController.editAuthor);
route.get('/delete/:id', authorController.deleteAuthor);
route.post('/update/:id',authorController.updateAuthor);
route.post('/save',authorController.saveAuthor);

module.exports = route;