const express = require('express');
const hbs = require ('hbs');
var app =express();
app.set('view engine','hbs');
app.get('/',(req,res)=>{
res.render('Examination.hbs',{
pageTitle:'Home page',
welcomeMessage:'Welcome to my page',
currentYear: new Date().getFullYear()
});
});

app.get('/Registration',(req,res)=>{
res.render('Registration.hbs',{
pageTitle:'Course Registration  Details',
currentYear: new Date().getFullYear()
});
});

app.get('/result',(req,res)=>{
res.render('result.hbs',{
pageTitle:'Course wise result Details',
currentYear:new Date().getFullYear()
});
});

app.get('/bad',(req,res)=>{
res.send({
errorMessage:'Unable to handle request'
});
});
app.listen(4000,()=>{
console.log('Server is up on port 4000');
});