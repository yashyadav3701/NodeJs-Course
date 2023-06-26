const express=require('express');
const path=require('path');
const ShopController=require('../controller/Shop');


const router=express.Router();
const AdminData=require('./Admin')
router.get('/',ShopController.getIndex);
router.get('/products',ShopController.getProducts);
router.get('/cart',ShopController.getCart);
router.get('/orders',ShopController.getOrders);
router.get('/checkout',ShopController.getCheckout);

module.exports=router;