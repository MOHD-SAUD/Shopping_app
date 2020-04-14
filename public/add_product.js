$(()=>{
   let prod_name=$('#prod_name')
   let prod_manf=$('#prod_manufacturer')
   let prod_price=$('#prod_Price')

    $('#btn_add_prod').click(()=>{
        add_prod(
            prod_name.val(),
            prod_manf.val(),
            prod_price.val(),
            function(added_product){
                window.alert("Added "+added_product.name+" to the database successfully")
            //  console.log("hello")
            }
            
        )
       

    })
    
})