const route = require('express').Router();
const apiAuthController = require('../../app/controllers/api/authController');
const { query } = require('express-validator');
const validator = require('../../app/validator');

route.get('/login', validator.loginValidator, apiAuthController.login);
route.post('/register', validator.registerValidator, apiAuthController.register);
route.post('/verify', apiAuthController.verify);

module.exports = route;