const express=require('express');
const app=express();
app.use(express.json());
require('dotenv').config();
const db=require('./config/dbConnect');
db.dbConnect();
const routes=require('./routes/route');
app.use('/api/v1/',routes);
app.listen(process.env.PORT,()=>{console.log('app running on'+process.env.PORT);})