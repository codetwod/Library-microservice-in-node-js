const express=require('express');
const route=express.Router();
const {createBook,getBooks, getBookById,deleteBook}=require('../controller/bookController');
route.get('/',(req,res)=>{
    res.send("this is main endpoint")
})
route.post('/createBook',createBook);
route.delete('/deleteBook/:bookId',deleteBook);
route.get('/books',getBooks);
route.get('/books/:bookId',getBookById);
module.exports=route;