const mongoose= require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.Mongo_URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected sucessfully...');
}).catch((e)=>{
    console.log('connection not established');
})