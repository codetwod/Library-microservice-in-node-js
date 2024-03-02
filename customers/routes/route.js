const express=require('express');
const route=express.Router();
const {createCustomer,getAllCustomers,getCustomer}=require('../controller/customerController');
route.post('/addCustomer',createCustomer);
route.get('/getCustomers',getAllCustomers);
route.get('/getCustomer/:customerId',getCustomer);
module.exports=route;