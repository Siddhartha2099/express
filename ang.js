const express = require('express');
const hbs = require ('hbs');
var app =express();
app.set('view engine','hbs');
app.get('/',(req,res)=>{
res.render('home.hbs',{
pageTitle:'Home page',
welcomeMessage:'Welcome to my page',
currentYear: new Date().getFullYear()
});
});
app.get('/about',(req,res)=>{
res.render('about.hbs',{
pageTitle:'About Page',
welcomeMessage: 'Welcome to my website',
currentYear:new Date().getFullYear()
});
});
app.get('/bad',(req,res)=>{
res.send({
errorMessage:'Unable to handle request'
});
});
app.listen(5000,()=>{
console.log('Server is up on port 5000');
});