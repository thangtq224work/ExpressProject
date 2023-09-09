const route = require('express').Router();
const authorController = require('../../app/controllers/authorController')
route.get('/auth',authorController.getAuthors);

module.exports = route;