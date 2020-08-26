import React from 'react';
import {Link, Route} from 'react-router-dom';
import Product from './Product';

const Products = ({match}) => {
    // /products/:product_id

    const productData = [
        { 
            id: 1, 
            name: 'Adidas Runners', 
            description: 'lorem ipsum', 
            status: 'Available'
        },
        { 
            id: 2, 
            name: 'NIKE Runners', 
            description: 'lorem ipsum', 
            status: 'Available'
        },
        { 
            id: 3, 
            name: 'PUMA Sneakers', 
            description: 'lorem ipsum', 
            status: 'Out of stock'
        }
    ]
    
    const productList = productData.map( product => {
        return(
            <li key={product.id}>
                <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
            </li>
        )
    })
    return(
        <div>
            <div>
                <h3>Products</h3>
                <ul>{productList}</ul>
            </div>
            <Route 
                path={`${match.url}/:productId`}
                render={(props) => <Product data={productData} {...props} />} 
            />
            <Route exact path={`${match.url}`} render={ () => <div>Select product</div>}></Route>
        </div>        
    )
}

export default Products;