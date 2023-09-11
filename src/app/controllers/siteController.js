const route = require('express').Router();

const siteController = {
    home:(req,resp)=>{
        resp.render('index',{message:"Home app"});
    }
}
module.exports = siteController;