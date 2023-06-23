const express=require('express');
const path=require('path');
const rootPath=require('../Utils/path')
const router=express.Router();

const products=[];
router.get('/add-product',(req,res,next)=>{
    // console.log("In the users Page");
    // res.send('<form action="/Admin/add-users" method="POST"><input type="text" name="user"><button type="submit">ADD USER</button></form>');
    // res.sendFile(path.join(__dirname,'../','Views','add-product.html'));

    // res.sendFile(path.join(rootPath,'Views','add-product.html'));      //using helper function
    
    res.render('add-product',{PageTitle:"Add Products",path:'/admin/add-product',product:true})
})

router.post('/add-product',(req,res)=>{
    products.push({title:req.body.title});
    // console.log(req.body);
    res.redirect('/');
})

// module.exports=router;
exports.routes=router;
exports.products=products;