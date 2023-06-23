const express=require('express');
const path=require('path');

const router=express.Router();
const AdminData=require('./Admin')
router.get('/',(req,res,next)=>{
    // console.log("In the home Domain");
    console.log(AdminData.products);
    // res.sendFile(path.join(__dirname,'../','Views','Shop.html'));
    res.render("Shop",{prods:AdminData.products,PageTitle:"My Shop",path:"/",hasProducts:AdminData.products.length>0,shop:true});
})

module.exports=router;