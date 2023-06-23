const http = require('http');
const express=require('express')

// const server = http.createServer(routes);
const app=express();

app.use((req,res,next)=>{
    console.log("In the middleware!!!!");
    next(); // allows to travel to next middleware
    //if not written then it will not proced to next middleware
})

app.use((req,res,next)=>{
    console.log("In the another middleware!!");
    res.send('<h1>Hello YASH</h1>');
})


// const server = http.createServer(app);
// server.listen(3000);

// ALTERNATIVE
app.listen(3000);

