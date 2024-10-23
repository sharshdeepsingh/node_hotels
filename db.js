require('dotenv').config();
const mongoose=require('mongoose');


//const mongoURL=process.env.MONGODB_URL_LOCAL

const mongoURL= process.env.MONGODB_URI ||




mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

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