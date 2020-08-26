import React from 'react';

const Product = ({match, data}) => {
    // console.log(match);
    let product = data.find( p => {
        return p.id === Number(match.params.productId);
    })
    //  console.log(product);
    let productData;

    if(product){
        productData = (
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr/>
                <span><strong>{product.status}</strong></span>
            </div>
        );
    } else{
        productData = <h2>Sorry! We will update our inventory. Thanks</h2>
    }

    return(
        <div>
            <div>{productData}</div>
        </div>
    )
}

export default Product;