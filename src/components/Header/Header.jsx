import React from 'react';
import logo from '../../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/orderReview">Order review</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;