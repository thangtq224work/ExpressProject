const route = require('express').Router();
const authorController = require('../../app/controllers/api/authorController');
const apiAuthController = require('../../app/controllers/api/authController');
route.get('/', apiAuthController.verify, authorController.getAuthors);
route.get('/delete/:id', apiAuthController.verify, authorController.deleteAuthor);
route.post('/update/:id', apiAuthController.verify, authorController.updateAuthor);
route.post('/save', apiAuthController.verify, authorController.saveAuthor);

module.exports = route;