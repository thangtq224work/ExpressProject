const { body } = require('express-validator');

const registerValidator = [
    body("username", "Username từ 5 đến 20 kí tự").trim().isLength({ min: 5, max: 20 }),
    body("password", "Password từ 5 đến 20 kí tự").trim().isLength({ min: 5, max: 20 }),
    body("fullname", "Họ tên từ 5 đến 20 kí tự").trim().isLength({ min: 5, max: 20 }),
    body("email", "Email không hợp lệ").isEmail(),
    body("birthday", "Vui lòng nhập ngày sinh").isISO8601("yyyy-MM-dd"),

];
const loginValidator = [
    body("username", "Username hoặc mật khẩu không hợp lệ").trim().isLength({ min: 1, max: 20 }),
    body("password", "Username hoặc mật khẩu không hợp lệ").trim().isLength({ min: 1, max: 20 }),
];
module.exports = { registerValidator, loginValidator }