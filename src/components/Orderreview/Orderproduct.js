import React from 'react';


const Orderproduct = (props) => {
    const {name,price,img,quantity,key}  = props.product
    return (
        <div className="product-container">
        <div className="img-div">
            <img src={img} alt="" />
        </div>
        <div className="product">
            <h3>{name}</h3>
            <h5><b>{price}</b></h5>
            <p>Quantity: {quantity}</p>
            <button onClick={() => props.RemoveHandler(key)} className="purchase-btn">Remove</button>
        </div>
    </div>
    );
};

export default Orderproduct;