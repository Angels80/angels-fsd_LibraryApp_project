const express = require("express");
const booksRouter=express.Router();

function router(nav){
    var books = [
        {
            title:'Turbulence And Triumph The Modi Years',
            author:'Rahul Agarwal, Bharathi S Pradhan',
            genre:'Biography',
            img:'91-UWqMTr3L.jpg'
        },
        {
            title:'Anything But Khamosh',
            author:'Shatrughan Sinha',
            genre:'Biography',
            img:'11.jfif'
        },
        {
            title:'A Kingdom for his Love',
            author:' Vani Mahesh, Shinie Anthony',
            genre:' Fiction',
            img:'12.jpg'
        },
        {
            title:'Gandhi: An Illustrated Biography',
            author:'Pramod Kapoor',
            genre:'Biography',
            img:'13.jfif'
        },
        {
            title:'The Culture Heritage of Trans Himalayan-Kinnaur',
            author:'P. S. Nagi Loktus',
            genre:'Biography',
            img:'14.jpg'
        },
        {
            title:'Who Was Shivaji?',
            author:'Sri Govind Pansare',
            genre:'Biography',
            img:'15.jfif'
        }
        
    ]
    booksRouter.get("/",function(req,res){
       
        res.render("books",
        {
                    nav,
                    title:'Library',
                    books
                 
        });
            
    });
    
    // booksRouter.get('/single',function(req,res){
    //     res.send("hey it is single book");
    // });
    
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
            res.render("book",
            {
                        nav,
                        title:'Library',
                        book:books[id]
               
            });
        });
        return booksRouter;
}


    module.exports=router;