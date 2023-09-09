const route = require('express').Router();
const bookController = require('../../app/controllers/bookController');

route.get('/',bookController.getAuthors);

module.exports = route;