const express=require('express');
const route=express.Router();
const {placeOrder, getOrders, getOrderById}=require('../controller/orderController');
route.post('/placeorder',placeOrder);
route.get('/getorder',getOrders);
route.get('/getorderbyid/:orderid',getOrderById)
module.exports=route;   