import React from 'react';
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
        clearTheCart()
        setCart([])
        History.push('/placeorder');
    }
    return (
        <div className="shop-container">
            <div className="shop">
                <h1>This is Order reviw page</h1>
                {
                    cart.map(product => <Orderproduct key={product.key} RemoveHandler={RemoveHandler} product={product} ></Orderproduct>)
                }
            </div>
            <div className="cart">
                <Cart  cartproduct={cart} >
                        <button onClick={HandlePlaceOrder} className="review-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orderreview;