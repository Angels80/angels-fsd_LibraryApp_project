const express = require("express");
const authorRouter=express.Router();

function router(nav){
    var authors = [
        {
            author:' R. K. Narayan',
            born:'Born: 10 October 1906, Madras Presidency',
            books:'books: Maalgudi Ki Kahaniyan, Swami and Friends,The Bachelor of Arts',
            spouse:'spouse:Rajam Narayan (m. 1934–1939)',
            party:'Party:Indian National Congress',
            children:'Children: Sonakshi Sinha, Luv Sinha, Kush Sinha',
            img:'21.jpg'
        },
        {
            
            author:'Shatrughan Sinha',
            born: 'Born: 9 December 1945 (age 74 years), Patna',
            spouse:'Spouse:Poonam Sinha (m. 1980)',
            party:'Party:Indian National Congress',
            children:'Children: Sonakshi Sinha, Luv Sinha, Kush Sinha',
            img:'10.jfif'
        },
        {
            author:'Chetan Bhagat',
            born:'born: 22 April 1974 (age 46 years), New Delhi',
            books:'books: Five Point Someone 2004, The 3 Mistakes of My Life 2008, 2 States: The Story of My Ma...2009',
            spouse:'spouse: Anusha Bhagat (m. 1998)',
            party:' Indian Institute of Management Ahmedabad (1995–1997)',
            children:'children:Ishaan Bhagat, Shyam Bhagat',
            img:'chetan-bhagat.jpg'
        },
        {
            author:'Amrita Pritam',
            born: '31 August 1919, Gujranwala, Pakistan',
            books: 'Rasidi ticket 1976, The Skeleton and That...1950',
            spouse:'Spouse:Poonam Sinha (m. 1980)',
            party:'Party:Indian National Congress',
            children:' Navraj Kwatra, Kandala',
            img:'20.jpg'
        },
        
    ]
    authorRouter.get("/",function(req,res){
       
        res.render("authors",
        {
                    nav,
                    title:'Authors',
                    authors
                 
        });
            
    });
    
    // booksRouter.get('/single',function(req,res){
    //     res.send("hey it is single book");
    // });
    
    authorRouter.get('/:id',function(req,res){
        const id=req.params.id;
            res.render("author",
            {
                        nav,
                        title:'Library',
                        author:authors[id]
               
            });
        });
        return authorRouter;
}


    module.exports=router;