const route = require('express').Router();
const authController = require('../../app/controllers/authController')
route.get('/login',authController.loginPage);

module.exports = route;