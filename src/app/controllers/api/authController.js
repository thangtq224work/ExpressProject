const { query, validationResult } = require('express-validator');
const User = require('../../models/User');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const UserRole = require('../../../const/UserRole');
const authController = {
    register: async (req, resp, next) => {
        const valid = validationResult(req);
        if (!valid.isEmpty()) {
            return resp.json({ errors: valid.array()[0].msg });
        }
        const data = await User.find({ $or: [{ username: req.body.username }, { email: req.body.email }] });
        if (data.length > 0) {
            return resp.status(400).json({ message: "Username or email already used" });
        }
        const user = new User(req.body);
        // user.role = UserRole.USER;
        user.password = bcryptjs.hashSync(user.password, await bcryptjs.genSalt(12));
        const userSaved = await user.save();
        resp.json(userSaved);
    },
    login: async (req, resp, next) => {
        const valid = validationResult(req);
        if (!valid.isEmpty()) {
            return resp.json({ errors: valid.array()[0].msg });
        }
        const data = await User.findOne({ username: req.body.username });
        const compare = await bcryptjs.compare(req.body.password, data.password);
        if (!compare) {
            return resp.status(401).json({ message: "Username hoặc mật khẩu không hợp lệ" });
        }
        const access_token = jsonwebtoken.sign({ user: data.username, role: data.role }, process.env.JWT_ACCESS_KEY, { expiresIn: "1m" });
        return resp.json({ access_token: access_token });
    },

    verify: async (req, resp, next) => {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return resp.status(401).json({ message: "Xác thực thất bại" });
        }
        const access_token = authorization.substr("Bearer ".length);
        jsonwebtoken.verify(access_token, process.env.JWT_ACCESS_KEY, (err, payload) => {
            if (err) {
                return resp.status(403).json({ message: "Xác thực thất bại" });
            }
            return resp.json({ data: payload });
        });
    },
}
module.exports = authController;