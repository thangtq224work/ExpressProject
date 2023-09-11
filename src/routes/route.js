const express = require('express');
const authorRoute = require('./subRoute/authorRoute');
const BookRoute = require('./subRoute/bookRoute');
const SiteRoute = require('./subRoute/siteRoute');
const siteController = require('../app/controllers/siteController');


const route = express.Router();
route.use(SiteRoute);
route.use('/book',BookRoute);
route.use('/author',authorRoute);
route.use('*',siteController.notFoundPage);



module.exports = route;