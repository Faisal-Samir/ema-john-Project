import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] =  useState([]);
    const [cart, setCart] =  useState([]);
    useEffect(() =>{
        fetch('../../../public/fakeData/products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[]);
    const btnClick = products =>{
        const newCart = [...cart, products];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="productsCard-container">
                {
                    products.map(products => <Product key={products.id} products={products} btnClick={btnClick}></Product>)
                }
            </div>
            <div className="order-summary">
                <p>Total Ordered Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;