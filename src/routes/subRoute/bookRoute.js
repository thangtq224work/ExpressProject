const route = require('express').Router();
const bookController = require('../../app/controllers/bookController');

route.get('/',bookController.getBooks);
route.get('/edit/:id',bookController.editBook);
route.get('/new',bookController.newBook);
route.post('/save',bookController.saveBook);
route.post('/update/:id',bookController.updateBook);
// route.post('/',bookController.getAuthors);

module.exports = route;