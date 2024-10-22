const mongoose=require('mongoose');
const mongoURL= 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db= mongoose.connection;


//event listners

db.on('connected',()=>
{
    console.log('mongodb server connected');
});
db.on('error',(err)=>{
    console.log('mongodb connection error:',err);
});
db.on('disconnected',()=>
{
    console.log('mongodb server disconnected');
});

module.exports= db;