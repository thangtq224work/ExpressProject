const express = require('express');
const AuthRoute = require('./subRoute/authorRoute');
const BookRoute = require('./subRoute/bookRoute');
const SiteRoute = require('./subRoute/siteRoute');


const route = express.Router();
route.use(SiteRoute);
route.use('/book',BookRoute);
route.use('/author',AuthRoute);



module.exports = route;