const express = require('express')
const route = require('./routes/route');
const path = require('path');
const hbs = require('express-handlebars');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./app/database/connect');
const dotenv = require('dotenv')
const app = express();
const port = process.env.PORT | 5005;
const formatDate = require('./app/utils/formatDate');


dotenv.config();
// hbs.registerHelper("ternary", (a, b) => {
//     return a ? a : b;
// })
// set view engine
// source : https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65
app.engine('hbs', hbs.engine({
    defaultLayout: 'layout',
    // config layout path
    layoutsDir: __dirname + '/views/layout',
    // config partial path of layout
    partialsDir: __dirname + '/views/component',
    //config file extention
    extname: 'hbs',
    helpers: {
        ternary: (a, b, c) => { return a ? b : c },
        formatDate: (a) => { return formatDate.formatDate(a) },
        sum: (a, b) => { return a + b },
        compare: (a, b) => { return a == b },
    }
})
);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs')
// public resource 
app.use(express.static(path.join(__dirname, './public')));
// config req
app.use(bodyParser.json({ limit: "20mb" }));
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// connect db
database.connect();
// set up route
app.use(route);
// 
app.listen(port, () => {
    console.log("Server is running");
});