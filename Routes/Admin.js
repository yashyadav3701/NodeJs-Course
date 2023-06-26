const express=require('express');
const path=require('path');
const rootPath=require('../Utils/path')
const router=express.Router();
const AdminController=require('../controller/Admin');

router.get('/add-product',AdminController.getAddProduct);
router.get('/products',AdminController.getProducts);

router.post('/add-product',AdminController.postAddProduct);

// module.exports=router;
module.exports=router;
// exports.products=products;