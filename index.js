const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();
require('./db/conn');


const PORT = process.env.PORT || 9000;




app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api', require('./router/user'));

// set static
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
})


app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})