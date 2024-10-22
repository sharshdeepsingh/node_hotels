const mongoose=require('mongoose');
const PersonSchema= mongoose.Schema(
    {
        name:{type:String,required:true},
        age:{type:Number,required:true},
        works:{type:String,enum:['chef','manager','waiter'],required:true},
        mobile:{type:Number,required:true},
        email:{type:String,required:true},
        address:{type:String},
        salary:{type:Number,required:true}
    }
);
const PersonModel=mongoose.model('PersonModel',PersonSchema);
module.exports=PersonModel;