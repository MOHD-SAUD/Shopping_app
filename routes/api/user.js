const user=require('../../db.js').user
const route=require('express').Router();
//get request for finding all users from db
route.get('/',(req,res)=>{
    user.findAll()
        .then((users)=>{
            res.status(200).send(users)

        })
        .catch((err)=>{
            res.status(500).send({
                error:"Could not retrieve user "
            })
        })

})

route.post('/',(req,res)=>{
    //add user in db
    user.create({
        name:req.body.name
    }).then((users)=>res.status(201).send(users))
    .catch((err)=>{
        res.status(501).send({
            error:"Could not add user"
        })
    })
})
module.exports=route