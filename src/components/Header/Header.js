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
                <Link to="/orderreview">Order</Link>
                <Link to="/inventory">Manage Inventory</Link>
            </nav>
        </div>
    );
};

export default Header;