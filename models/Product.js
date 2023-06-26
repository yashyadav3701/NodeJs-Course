const fs=require('fs');
const path=require('path');

const p=path.join(path.dirname(require.main.filename),'data','products.json');

const getdataFromFile=(cb)=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err)
            cb([]);
        else
            cb(JSON.parse(fileContent));
    })
}

module.exports=class Product{
    constructor(title,imageURL,price,description){
        this.title=title;
        this.imageURL=imageURL;
        this.price=price;
        this.description=description;
    }

    save(){
       getdataFromFile((products)=>{
           products.push(this);
           fs.writeFile(p,JSON.stringify(products),(err)=>{
               console.log(err);
           });
       })
    }

    static fetchAll(cb){
        getdataFromFile(cb);
    }
}