const express=require('express');
const path=require('path');

const router=express.Router();
const AdminData=require('./Admin')
router.get('/',(req,res,next)=>{
    // console.log("In the home Domain");
    console.log(AdminData.products);
    // res.sendFile(path.join(__dirname,'../','Views','Shop.html'));
    res.render("Shop",{prods:AdminData.products,docTitle:"My Shop"});
})

module.exports=router;