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
import {FormControl, InputGroup, Offcanvas,Button} from 'react-bootstrap'
import Slider from '../Carousel/Slider';
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
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let Quantity = 0;
  for(const product of cart)
      {   
          if(!product.quantity)
          {
              product.quantity = 1
          }
          Quantity = Quantity + product.quantity    
      }
    return (
        <div className="shop justify-content-center container-fluid">
            <Slider></Slider>
              <div className="d-flex mx-auto">
                   <div className="">
                        <div className="sliders d-flex align-items-center">
                        <InputGroup  className="mb-3 mt-2 w-75 mx-auto">
                            <FormControl
                                onChange={SearchHandler}
                            placeholder="Search Your Product"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                    </InputGroup>
                        </div>
                    <div className="row gy-4 gap-4">
                        {
                            filterProducts.map(product => <Product 
                            key={product.key} 
                            product={product}
                            AddingCart={AddingCart}
                            >
                                
                            </Product>)
                        }
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-2">
                            <button  onClick={handleShow}  className="float">
                                 <b><small className="my-float">Cart {Quantity}</small></b>
                            </button>
                            </div>
                        </div>
                    </div>
                   </div>
              </div>
             
            <Offcanvas classNsme="w-50" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Ordered Summary</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Cart cartproduct={cart}>
                    <Link to="/orderreview">
                        <button className="review-btn">Review Order</button>
                    </Link>
                </Cart>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
        
    );
};

export default Shop;