function fetch_prod(done){
    $.get('/api/products',(data)=>{
        done(data)
    })
}

function add_prod(name,manufacturer,price,done){
    $.post('/api/products',{
        name:name,
        manufacturer:manufacturer,
        price:price
    },function(data){
        done(data);
    }
    )
    
}



function create_prod_card(product){
    return $(
    `<div class="col-4 card mx-2 p-4">
            <h4 class="product-name">${product.name}</h4>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="row">
                <div class="col m-3 p-3">
                    ${product.price}
                </div>
                <button class="btn btn-primary col m-3 p-2">Buy</button>
            </div>
    </div>`

    )
}

