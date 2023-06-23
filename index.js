const express=require('express');
const bodyParser=require('body-parser');

const AdminData=require('./Routes/Admin');
const ShopRoutes=require('./Routes/Shop')
const app=express();
const path=require('path')
// // FOR MIDDLEWARE
// app.use((req,res,next)=>{
//     console.log('IN THE FIRST MIDDLWARE');
//     next();
// })

// app.use((req,res,next)=>{
//     console.log('IN THE SECOND MIDDLWARE');
//     res.send('<h2>HELLO MIDDLEWARE</h1>');
// })

// FOR ROUTING
app.use(bodyParser.urlencoded());
// app.use(bodyParser.urlencoded({extended:false}));

// app.use('/add-users',(req,res,next)=>{
//     // console.log("In the users Page");
//     res.send('<form action="/users" method="POST"><input type="text" name="user"><button type="submit">ADD USER</button></form>');
// })

// This will work for GET only
// app.get(...);

// This will work for POST only 
// app.post(...);

//this will work for both GET and POST request
// app.use('/users',(req,res)=>{
//     console.log(req.body);
//     res.redirect('/');
// })

// app.use('/',(req,res,next)=>{
//     // console.log("In the home Domain");
//     res.send('<h1>Index Page</h1>');
// })


app.set('view engine','pug');
app.set('views','Views');

app.use(express.static(path.join(__dirname,'Public')));
//use is dependent on order while get and post are not dependent(Independent) on any order of routes /* IMP */
app.use('/Admin',AdminData.routes);
app.use(ShopRoutes);

app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page Not Found</h1>');
    // res.status(404).sendFile(path.join(__dirname,'Views','errorPage.html'));
    res.status(404).render("errorPage");
})

app.listen(3000);