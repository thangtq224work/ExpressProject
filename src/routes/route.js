const express = require('express');
const route = express.Router();

route.get('/hello',(req,resp)=>{
    return resp.send("blo");
});


module.exports = route;