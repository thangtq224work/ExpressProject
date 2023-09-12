const express = require('express');
const authorRoute = require('./subRoute/authorRoute');
const BookRoute = require('./subRoute/bookRoute');
const SiteRoute = require('./subRoute/siteRoute');
const authRoute = require('./subRoute/authRoute');
const siteController = require('../app/controllers/siteController');
const apiAuthRoute = require('./apiRoute/authRoute');


const route = express.Router();
route.use(SiteRoute);
route.use('/book', BookRoute);
route.use('/v1', authRoute);
route.use('/author', authorRoute);
route.use('/api/v1', apiAuthRoute);
route.use('*', siteController.notFoundPage);



module.exports = route;