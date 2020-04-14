$(()=>{
    let productList=$('#product-list')
    fetch_prod(function(products){
        productList.empty();
        for(p of products){
            productList.append(create_prod_card(p))
        }
    })
})