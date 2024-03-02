const mongoose=require('mongoose');
require('dotenv').config();

exports.dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.mongodb_URL);
        console.log('database connected succesfully');
    }catch(err){
        console.log("error in database connection");
        console.log(err);
        process.exit(1);
    }
}