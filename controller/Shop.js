const Product=require('../models/Product');

exports.getIndex=(req,res,next)=>{
    // console.log("In the home Domain");

    Product.fetchAll((products)=>{
        console.log(products);
        // res.sendFile(path.join(__dirname,'../','Views','Shop.html'));
        res.render("shop/index",{prods:products,PageTitle:"My Shop",path:"/",hasProducts:products.length>0,shop:true});
    });
}

exports.getProducts=(req,res,next)=>{
    // console.log("In the home Domain");

    Product.fetchAll((products)=>{
        console.log(products);
        // res.sendFile(path.join(__dirname,'../','Views','Shop.html'));
        res.render("shop/products-list",{prods:products,PageTitle:"Products",path:"/products",hasProducts:products.length>0,shop:true});
    });
}

exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{path:"/cart",PageTitle:"Cart"});
}

exports.getOrders=(req,res,next)=>{
    res.render('shop/orders',{path:"/orders",PageTitle:"Orders"});
}

exports.getCheckout=(req,res,next)=>{
    res.render('shop/checkout',{path:"/checkout",PageTitle:"Checkout"});
}
