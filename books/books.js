const express=require("express");
const app=express();
require('dotenv').config();
app.use(express.json());
const database=require('./config/database');
database.dbConnect();
const routes=require('./routes/Route');
app.use('/api/v1/',routes);

app.listen(process.env.PORT,()=>{console.log('server started at '+process.env.PORT);})