const product=require('../../db.js').product
const route=require('express').Router();


route.get('/',(req,res)=>{
    //get all product from db
    product.findAll()
        .then((products)=>{
            res.status(200).send(products)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"Could not get product"
            })
        })
})


route.post('/',(req,res)=>{
    //validate the req
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:"Price not a valid number"
        })
    }
    //add a product in db
    product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)
    }).then((product)=>{
        res.status(201).send(product)
        // route.redirect('/products')
    })
    .catch((err)=>{
        res.status(501).send({
            error:"Could not add a user"
        })
    })
})

module.exports=route;