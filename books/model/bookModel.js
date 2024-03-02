const mongoose=require('mongoose');
const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    numberOfPages:{
        type:Number,
        required:false
    },
    publisher:{
        type:String,
        require:false
    }    
});
module.exports=mongoose.model("bookSchema",bookSchema);