const express = require('express')
const route = require('./routes/route');
const path = require('path');
const hbs = require('express-handlebars');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();
const port = process.env.PORT | 5005;


dotenv.config();
// set view engine
// source : https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65
app.engine('hbs', hbs.engine({
    defaultLayout: 'layout',
    // config layout path
    layoutsDir: __dirname + '/views/layout',
    // config partial path of layout
    partialsDir: __dirname + '/views/component',
    //config file extention
    extname: 'hbs'
}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs')
// public resource 
app.use(express.static(path.join(__dirname, './public')));
// config req
app.use(bodyParser.json({ limit: "20mb" }));
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// mongoose.connect(process.env.DB_URL).then((resp)=>{
//     console.log("Connected");
// }).catch(err=>{
//     console.log(err);
// })
app.use(route);

app.listen(port, () => {
    console.log("Server is running");
});