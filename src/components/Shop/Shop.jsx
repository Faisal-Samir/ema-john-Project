import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] =  useState([]);
    useEffect(() =>{
        fetch('../../../public/fakeData/products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="productsCard-container">
                {
                    products.map(products => <Product key={products.id} products={products}></Product>)
                }
            </div>
            <div className="order-summary">
                <h1>Order summary</h1>
            </div>
        </div>
    );
};

export default Shop;