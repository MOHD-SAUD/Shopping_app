const route=require('express').Router();

const user_api=require('./user')
const product_api=require('./product')

route.use('/users',user_api);
route.use('/products',product_api);


module.exports={
    route
}