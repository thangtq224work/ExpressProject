const { query, validationResult } = require('express-validator');
const User = require('../../models/User');
const bcryptjs = require('bcryptjs');
const authController = {
    register: async (req, resp, next) => {
        const valid = validationResult(req);
        if (!valid.isEmpty()) {
            return resp.send({ errors: valid.array()[0].msg });
        }
        const data = await User.find({ $or: [{ username: req.body.username }, { email: req.body.email }] });
        if(data.length > 0){
            return resp.status(400).json({message:"Username or email already used"});
        }
        const user = new User(req.body);
        console.log(user.password);
        user.password = bcryptjs.hashSync(user.password, await bcryptjs.genSalt(12));
        const userSaved = await user.save();
        resp.json(userSaved);
    },
    login: (req, resp, next) => {
        const valid = validationResult(req);
        if (valid.isEmpty()) {
            return resp.send(`Hello, ${req.query.username}!`);
        }
        resp.send({ errors: valid.array()[0].msg });
    },
}
module.exports = authController;