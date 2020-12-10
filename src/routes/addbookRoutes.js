const express = require("express");
const addbookRouter=express.Router();

const nav1=[
    
    {
        link :'./addauthor',
        name:'add'
    }]
function router(nav){
   
    addbookRouter.get("/",function(req,res){
       
        res.render("addbook",
        {
                    nav,
                    title:'login'
                    
                 
        });
    
    addbookRouter.get("/add",function(req,res){
       
        res.send("Hey i am added")
    })        
            
    }); 
    return addbookRouter;
}


    module.exports=router;

     