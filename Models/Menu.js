const mongoose=require('mongoose');
const MenuSchema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true,default:1.99},
    taste:{type:String,enum:['spicy','sweet','sour']},
    is_drink:{type:Boolean,default:false},
    ingredients:{type:[String],default:[]},
    num_of_sales:{type:Number,default:0}
});
const MenuItemModel=mongoose.model('MenuItemModel',MenuSchema);
module.exports=MenuItemModel;