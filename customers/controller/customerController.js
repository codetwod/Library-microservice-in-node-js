const { json } = require('express');
const customerSchema=require('../model/customerSchema');
exports.createCustomer=async(req,res)=>{
    try{
        const{name,age,address}=req.body;
        const newCustomer=await customerSchema.create({name,age,address});
        res.status(200).json({
            success:true,
            data:newCustomer
        })
    }catch(err){
        res.status(400).json({
            error:err.message,
            message:'error in creating customer'
        })
    }
}

exports.getAllCustomers=async(req,res)=>{
    try{
        const allCustomers=await customerSchema.find({});
        res.send(allCustomers);
    }catch(err){
        res.status.json({
            error:err.message,
            message:'error in fetching customers'
        })
    }
}

exports.getCustomer=async(req,res)=>{
    try{
        const {customerId}=req.params;
        const customer=await customerSchema.findById(customerId);
        res.send(customer);
    }catch(err){
        res.status(400).json({
            message:'error in finding customer',
            error:err.message
        })
    }
}