const mongoose = require('mongoose');

const connect = async () => {
    mongoose.connect(process.env.DB_URL).then((resp) => {
        console.log("Connected");
    }).catch(err => {
        console.log(err);
    })
}

module.exports = { connect }