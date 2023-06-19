const { Module } = require("module");
const fs=require('fs');


const RouteHandler=(req,res)=>{
    //  console.log(req.url,req.method,req.headers); 

    const url = req.url;
    const method=req.method;
    if (url === '/') {
        res.write('<html>');
        res.write("<head><title>Enter Message</title></head>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const data=[];
        req.on('data',(chunk)=>{
            data.push(chunk);
            // console.log(chunk);
        })
        req.on('end',()=>{
            const workingData=Buffer.concat(data).toString();
            const message=workingData.split('=')[1];
            // fs.writeFileSync('Message.txt',message);
            fs.writeFile('Message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write("<head><title>HELLO</title></head>");
    res.write('<body><h1>Hello from Nodejs Server</h1></body>')
    res.write('</html>');
    res.end();

      //  process.exit();
    /* we will not use this(process.exit()) as we will not be quitting our server ,our server will always be Up; */
}


// module.exports=RouteHandler;

// module.exports={
//     handler:RouteHandler,
//     text:'Some Random Text'
// };

// OR
module.exports.handler=RouteHandler;
module.exports.text='some rabdom text';

// OR
// exports.handler=RouteHandler;
// exports.text='some rabdom text';