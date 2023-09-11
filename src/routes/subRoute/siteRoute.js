const route = require('express').Router();
const siteController = require('../../app/controllers/siteController');
const bookController = require('../../app/controllers/bookController');

route.get(['/','/home'],siteController.home);
route.get('/error',siteController.haveError);

module.exports = route;