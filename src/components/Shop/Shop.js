import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import {AddedProduct,Getproduct} from '../Localstorages/Added';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useProducts from '../Hooks/useProducts';
import useCart from '../Hooks/useCart';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const [filterProducts, setFilterproducts] = useProducts();

    const AddingCart = (product) => {
        setCart([...cart, product])
        // adding product to localStorage
        AddedProduct(product.key)
    }
    const SearchHandler = (event) => {
        const searchtext = event.target.value;
        const FilterProduct = products.filter(product => product.name.toLowerCase().includes(searchtext.toLowerCase()));
        setFilterproducts(FilterProduct)
    }
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="parent-div">
            <div className="search-bar">
                <input onChange={SearchHandler} className="input-field" type="text" /> <span className="spans">{element}</span>
            </div>
            <div className="shop-container">
            <div className="shop">
                {
                    filterProducts.map(product => <Product 
                    key={product.key} 
                    product={product}
                    AddingCart={AddingCart}
                    >
                        
                    </Product>)
                }
            </div>
            <div className="cart">
                <h1>Ordered Summary</h1>
                <Cart cartproduct={cart}>
                    <Link to="/orderreview">
                        <button className="review-btn">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
        </div>
        
    );
};

export default Shop;