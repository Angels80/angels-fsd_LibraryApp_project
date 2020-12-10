const express = require("express");
const app = new express();
const port =process.env.PORT || 5000;

const nav=[
    
        {
            link :'./books',
            name:'Books'
        },
        {
            link :'./authors',
            name:'Authors'
        },
        {
            link :'./login',
            name:'Login'
        },
        {
            link :'./signup',
            name:'SignUp'
        },
        {
            link :'./addbook',
            name:'AddBook'
        },
    ]

const booksRouter=require("./src/routes/bookRoutes")(nav);
const authorRouter=require("./src/routes/authorRoutes")(nav);
const addbookRouter=require("./src/routes/addbookRoutes")(nav);
// const loginRouter=require("./src/routes/loginRoutes")(nav);

// seperater router for books

app.use(express.static('./public'));
// add ejs
app.set('view engine','ejs');
// go to initial path
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/addbook',addbookRouter);
// app.use('/login',loginRouter);

app.get("/",function(req,res){
    // instead of __dirname use C:\Users\ACER\Desktop\fsd\LibraryApp with / slashes
    // res.sendFile(__dirname+"/src/views/index.html");
    // this is for ejs
    res.render("index",
    {
        // nav:[
        //     {
        //         link :'./books',
        //         name:'Books'
        //     },
        //     {
        //         link :'./authors',
        //         name:'Authors'
        //     }],
                nav,
                title:'Library'
             
    });
   
});
app.get("/login",function(req,res){
   
    res.sendFile("login.html",{root:__dirname+"/src/views/"});
   
});
app.get("/login/submit",function(req,res){
   
    res.send();
   
});
app.get("/signup",function(req,res){
   
    res.sendFile("signup.html",{root:__dirname+"/src/views/"});
   
});
app.post('/signup.html', function(req, res) 
    {
        res.render("signup")
    });






app.listen(port,()=>{console.log("server ready at port:");});
// 127.0.0.1:5000
