const express = require('express')
const route = require('./routes/route');
const path = require('path');

const app = express();
const port = 5005;

// set view engine
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine','pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(route);

app.get(['/','/home'],(req,resp)=>{
    resp.send('hello world');
});
app.listen(port,()=>{
    console.log("Server is running");
});