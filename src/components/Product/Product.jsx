import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { img, name, price, seller, ratings} = props.products;
    const btnClick = props.btnClick;
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
                <button onClick={() => btnClick(props.products)} id='btn-card'>Add to Card <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;