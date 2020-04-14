const express=require('express');
const app=express();
const PORT=process.env.PORT||2233

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(__dirname+'/public'));
app.use('/add',express.static(__dirname+'/public/add_product.html'));

app.use('/api',require('./routes/api').route)
app.use('/add/view',express.static(__dirname+'/public'));

app.listen(PORT,()=>{
    console.log("server started at http://localhost:2233")
})