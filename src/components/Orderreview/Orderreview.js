import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import { clearTheCart, Getproduct, RemoveProduct } from '../Localstorages/Added';
import Orderproduct from './Orderproduct';

const Orderreview = () => {
    const [products,setProducts]= useProducts();
    const [cart, setCart] = useCart(products);
    const RemoveHandler = (key) => {
        const newcart = products.filter(product => product.key !== key);
        setProducts(newcart)
        RemoveProduct(key)
    }
    const History = useHistory();
    const HandlePlaceOrder = () => {
        History.push('/shipping');
    }
    return (
        <div className="container-fluid">
            <div className="row mx-auto mt-4">
                  
                <div className="mt-4 col-lg-4 col-md-12">
                    <Cart  cartproduct={cart} >
                            <button onClick={HandlePlaceOrder} className="review-btn">Place Order</button>
                    </Cart>     
                </div>
                <div className="col-lg-8 col-md-12">
                <h1 className="text-center  mt-4">Your Ordered Items</h1>
                    <div className="row mx-auto">
                        {
                        cart.map(product => <Orderproduct key={product.key} RemoveHandler={RemoveHandler} product={product} ></Orderproduct>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orderreview;