const express = require('express');
const AuthRoute = require('./subRoute/authRoute');
const BookRoute = require('./subRoute/bookRoute');


const route = express.Router();
route.use('/v2',BookRoute);
route.use('/v1',AuthRoute);



module.exports = route;