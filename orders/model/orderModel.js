const mongoose=require('mongoose');
const orderModel=mongoose.Schema({
    customerId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    }, 
    bookId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    initialDate:{
        type:Date,
        required:true
    },
    deliveryDate:{
        type:Date,
        required:true
    }
});
module.exports=mongoose.model("orderModel",orderModel);