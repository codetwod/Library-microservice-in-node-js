const bookSchema=require('../model/bookModel');
exports.createBook=async(req,res)=>{
    try{
        const{title,author,numberOfPages,publisher}=req.body;
        const newBook=await bookSchema.create({title,author,numberOfPages,publisher});
        console.log("New book entry created");
        res.status(200).json({
            newBook
        })
    }
    catch(err){
        console.log("error in creating new book");
        console.log(err);
    }
}

exports.getBooks=async(req,res)=>{
    try{
        const bookData=await bookSchema.find({});
        res.status(200).json({
            books:bookData
        })
    }catch(err)
    {
        res.status(400).json({
            message:"error in fetching books from database"
        })
    }
}

exports.getBookById=async(req,res)=>{
    try{const {bookId}=req.params;
    const singleBook=await bookSchema.findById(bookId);
    res.status(400).json({
        book:singleBook
    })}catch(err){
        res.status(400).json({
            message:"error in finding book"
        })
    }
}

exports.deleteBook=async(req,res)=>{
    try{
        const {bookId}=req.params;
        const deletedBook=await bookSchema.findByIdAndDelete(bookId);
        if(!deletedBook)
        res.status(400).json({
            message:"Book not found"

        })
        res.status(200).json({
            message:"succesfully deleted"
        })
    }catch(err){
        res.status(400).json({
            error:err,
            message:"error in deleting frm database"
        })
    }
}