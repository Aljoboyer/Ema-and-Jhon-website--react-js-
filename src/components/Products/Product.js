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
        <div className="product-container">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <div className="product">
                <h3>{name}</h3>
                <h5><b>{price}</b></h5>
                <p><b>only {stock} left in stock - order soon</b></p>
                <div className="star-and-feature">
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