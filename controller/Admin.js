const Product=require('../models/Product');

exports.getAddProduct=(req,res,next)=>{
    // console.log("In the users Page");
    // res.send('<form action="/Admin/add-users" method="POST"><input type="text" name="user"><button type="submit">ADD USER</button></form>');
    // res.sendFile(path.join(__dirname,'../','Views','add-product.html'));

    // res.sendFile(path.join(rootPath,'Views','add-product.html'));      //using helper function
    
    res.render('admin/add-product',{PageTitle:"Add Products",path:'/admin/add-product',product:true})
}

exports.getProducts=(req,res,next)=>{
    Product.fetchAll((products)=>{
    res.render('admin/products',{PageTitle:"Admin Products",path:'/admin/products',prods:products})
    })
}

const products=[];
exports.postAddProduct=(req,res)=>{
    const title=req.body.title;
    const imageURL=req.body.imageURL;
    const price=req.body.price;
    const description=req.body.description;
    const product = new Product(title,imageURL,price,description);
    product.save();
    products.push({title:req.body.title});
    // console.log(req.body);
    res.redirect('/');
}