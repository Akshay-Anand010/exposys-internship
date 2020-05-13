const express=require('express');
const path=require('path');
const app=express();

//set public folder
app.use(express.static(path.join(__dirname,'public')));

const port = process.env.PORT || 3001

//load view engine

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/home',function(req,res){
        res.render('index');
});

app.get('/',function(req,res){
        res.render('login');
});

app.get('/contact',function(req,res){
        res.render('contact');
});

app.get('/about',function(req,res){
        res.render('about');
});

app.get('/check',function(req,res){
        res.render('index')

})
app.get('/join',function(req,res){
        res.render('join');
});

app.get('/cart',function(req,res){
        res.render('cart');
});
//start server
app.listen(port);