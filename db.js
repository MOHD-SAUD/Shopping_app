const sequelize=require('sequelize')

const db=new sequelize('shopdb','shopuser','shoppass',{
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0
    }
}
)

const user=db.define('users',{
    name:{
        type:sequelize.STRING,
        allowNull:false
    }
})

const product=db.define('products',{
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    manufacturer:sequelize.STRING,
    price:{
        type:sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0

    }

})

db.sync()
    .then(()=> console.log("Database synced/created successfully"))
    .catch((err)=>console.log("Error in creating database"))

module.exports={
    user,product
}