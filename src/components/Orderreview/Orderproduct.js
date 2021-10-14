import React from 'react';


const Orderproduct = (props) => {
    const {name,price,img,quantity,key}  = props.product
    return (
    <div className="col-lg-6 col-md-12 col-sm-12">
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