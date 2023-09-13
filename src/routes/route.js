const express = require('express');
const authorRoute = require('./subRoute/authorRoute');
const BookRoute = require('./subRoute/bookRoute');
const SiteRoute = require('./subRoute/siteRoute');
const authRoute = require('./subRoute/authRoute');
const siteController = require('../app/controllers/siteController');
const apiAuthRoute = require('./apiRoute/authRoute');
const apiAuthorRoute = require('./apiRoute/authorRoute');
const apiBookRoute = require('./apiRoute/bookRoute');


const route = express.Router();
route.use('/api/v1', apiAuthRoute);
route.use('/api/book', apiAuthorRoute);
route.use('/api/author', apiBookRoute);
route.use(SiteRoute);
route.use('/book', BookRoute);
route.use('/v1', authRoute);
route.use('/author', authorRoute);
route.use('*', siteController.notFoundPage);



module.exports = route;