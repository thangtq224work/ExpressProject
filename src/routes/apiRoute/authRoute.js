const route = require('express').Router();
const apiAuthController = require('../../app/controllers/api/authController');
const { query } = require('express-validator');
const validator = require('../../app/validator');

route.get('/login', query("username", "Vui lòng nhập username").optional().isEmail(), apiAuthController.login);
route.post('/register', validator.registerValidator, apiAuthController.register);

module.exports = route;