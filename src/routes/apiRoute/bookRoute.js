const route = require('express').Router();
const bookController = require('../../app/controllers/api/bookController');
const apiAuthController = require('../../app/controllers/api/authController');

route.get('/', apiAuthController.verify, bookController.getBooks);
route.get('/delete/:id', apiAuthController.verify, bookController.deleteBook);
route.post('/save', apiAuthController.verify, bookController.saveBook);
route.post('/update/:id', apiAuthController.verify, bookController.updateBook);

module.exports = route;