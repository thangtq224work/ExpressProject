const route = require('express').Router();
const siteController = require('../../app/controllers/siteController');

route.get('/',siteController.home);

module.exports = route;