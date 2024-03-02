    const orderModel=require('../model/orderModel');
    const axios=require('axios');
    exports.placeOrder=async(req,res)=>{
        try{
            const{customerId,bookId,initialDate,deliveryDate}=req.body;
            const placedOrder=await orderModel.create({customerId,bookId,initialDate,deliveryDate});
            res.status(200).json({
                success:true,
                data:placedOrder
            })
        }catch(err){
            res.status(400).json({
                success:false,
                errorMessage:err.message,
                error:err
            })
        }
    }

    exports.getOrders=async(req,res)=>{
        try{
            const data=await orderModel.find();
            res.send(data);
        }catch(err){
            res.status(400).json({
                success:false,
                error:err.message
            })
        }
    }

    exports.getOrderById=async(req,res)=>{
        try{
            const {orderid}=req.params;
            console.log(orderid);
            const order=await orderModel.findById(orderid);
            if(order)
            {
                console.log("customer id:"+order.customerId);
                console.log("book id:"+order.bookId);
                const customerData=await axios.get("http://localhost:5555/api/v1/getCustomer/"+order.customerId);
                // console.log(customerData);
                console.log("customer done");
                const bookData=await axios.get("http://localhost:3001/api/v1/books/"+order.bookId);
                console.log("book done");
                // console.log(bookData);
                res.send({customerData,bookData})
            }
        }catch(err){
            res.send("invalid order")
        }
    }