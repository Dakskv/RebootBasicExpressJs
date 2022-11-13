const express = require('express');
const path = require('path');

const app = express();
const port = 7000;

// middleware
app.use('/static',express.static('public'));

// req = request
// res = response
app.get('/',(req,res)=>{
    // console.log(req.url);
    // res.send("<h1>Home Page</h1>");
    // res.write("<a href='/about'>About</a><a href='/contact'>Contact</a>");
    // res.write("<a href='/about'>About</a><a href='/contact'>Contact</a>");
    // res.end();
    // \n \t \b
    console.log(path.join(__dirname,"new1.html"));
    // res.send("Hello World!!");
    // res.sendFile('new1.html', {root: __});
    // res.sendFile(path.join(__dirname,"new1.html"));
    res.sendFile("new1.html", {root: __dirname});
});

// app.use(route,express.static(location))

// route with / in GET request is not defined

app.get('/about',(req,res)=>{
    // console.log(req.url);
    res.send("This is about Page <a href='/'>Back</a>");
});

app.get('/contact',(req,res)=>{
    // console.log(req.url);
    res.send("This is contact Page");
});

app.listen(port, ()=>{
    console.log("Listening from port " + port);
});