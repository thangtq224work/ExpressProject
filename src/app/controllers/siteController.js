const Book = require('../models/Book');
const castOb = require('../utils/castObject');

const siteController = {
    home:(req,resp)=>{
        
        const books = Book.find({available:true}).then(data=>{
            Book.find({ available: true }).populate('author').then(data => {
                resp.render('page/home', { books: castOb.castObjects(data) });
            }).catch(err => {
                resp.redirect('/error');
            })
        });
    },
    notFoundPage:(req,resp)=>{
        resp.render('notFound',{layout:false});
    }
    ,
    haveError:(req,resp)=>{
        resp.render('haveError',{layout:false});
    }
}
module.exports = siteController;