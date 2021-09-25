import React from 'react';
import logo from '../../asset/images/logo.png'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img width="300px" src={logo} alt="" />
            <nav>
                <Link to="/">Shop</Link>
                <a href="/order">Order</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;