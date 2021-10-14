import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import Features from './Features';
const Product = (props) => {
    const {name, price, img, stock,star,features} = props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product col-lg-5 col-md-12 col-sm-12 product">
            <div className="text-center mb-2 ">
                <img className="img-fluid rounded" src={img} alt="" />
            </div>
            <div className="ms-2">
                <h4>{name}</h4>
                <h5><b>{price}</b></h5>
                <p><b>only {stock} left in stock - order soon</b></p>
                <div className="d-flex justify-content-evenly mb-1">
                    <div >
                        <Rating   
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star" readonly></Rating>
                    </div>
                    <div>
                        {
                            features?.map(feature => <Features key={Math.floor((Math.random() * 10000) + 1)} description={feature.description} value={feature.value}></Features>)
                        }
                    </div>
                </div>
                <button onClick={() => props.AddingCart(props.product)} className="purchase-btn">{element} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;