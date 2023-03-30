import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name,price,seller,ratings,id} = props.products;
    const btnClick = id =>{
        console.log('clicked',id);
    }
    return (
        <div>
            <div className='product'>
                <div className='product-body'>
                    <img className='product-img' src={img} alt="" />
                    <div>
                        <p id='name'>{name}</p>
                        <p id='product-price'>Price: ${price}</p>
                    </div>
                    <div>
                        <p id='manufacturer'>Manufacturer: {seller}</p>
                        <p id="rating">Rating: {ratings} star</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => btnClick(id)} id='btn-card'>Add to Card</button>
            </div>
        </div>
    );
};

export default Product;