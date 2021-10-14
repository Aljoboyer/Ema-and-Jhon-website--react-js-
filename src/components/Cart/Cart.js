import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const {cartproduct} = props
    let itemtotal = 0;
    let total = 0;
    let ShippingCost = 0;
    let Quantity = 0;
    for(const product of cartproduct)
        {   
            if(!product.quantity)
            {
                product.quantity = 1
            }
            Quantity = Quantity + product.quantity
            itemtotal =itemtotal +  product.price  * product.quantity;
            ShippingCost = ShippingCost + product.shipping * product.quantity
            total = itemtotal;
            
        }

    return (
        <div className="cart">
            <h3>Items Ordered : {Quantity}</h3>
            <h4><b>Items : {parseFloat(itemtotal).toFixed(2)}</b></h4>
            <p><b>Shipping and Handling : {parseFloat(ShippingCost).toFixed(2)}</b></p>
            <p><b>Total before tax : </b></p>
            <h2 className="total"><b>Order Total : {parseFloat(total.toFixed(2))}</b></h2>
            {props.children}
        </div>
    );
};

export default Cart;