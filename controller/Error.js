exports.get404=(req,res,next)=>{
    // res.status(404).send('<h1>Page Not Found</h1>');
    // res.status(404).sendFile(path.join(__dirname,'Views','errorPage.html'));
    res.status(404).render("shop/errorPage",{PageTitle:"Error Page",path:"/"});
}