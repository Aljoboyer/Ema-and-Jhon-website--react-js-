import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import { useForm } from "react-hook-form";
import './Shipping.css';
import useAuth from '../../Context/Contexthook';
import useCart from '../Hooks/useCart';
import { clearTheCart } from '../Localstorages/Added';
const Shipping = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {users} = useAuth();
    const [products,setProducts]= useProducts();
    const [cart, setCart] = useCart(products);
    const [success, setSuccess] = useState('')
    const ConfirmHandler = () => { 
        setCart({})
        clearTheCart();
        setSuccess('Success Shipping')
    }
    return (
        <div>
            <h2 className="text-center">Shipping Here</h2>
            <div className="div">
                {
                  !cart.length ?  <h1 className="fs-1 fw-bold text-center text-success" >{success}</h1> :
                    <div className="row mb-4">
                    <div className="d-flex justify-content-center mt-4 col-lg-12 col-sm-12">
                        <div className="w-50">
                        <form>
                        <h2  >ConFirm Order</h2>
                        <label htmlFor="">Name</label>
                                    <input defaultValue={users.displayName}   className="w-100" type ="text" {...register("name", { required: true })} />
            
                                    <label htmlFor="">Email</label>
                                    <input defaultValue={users.email} className="w-100" type="email" {...register("email", { required: true })} />
            
                                    <label htmlFor="">Contact Number</label>
                                    <input className="w-100" type="number" {...register("number", { required: true })} />
                                    <label htmlFor="">Credit Card No</label>
                                    <input className="w-100" type="number" {...register("number", { required: true })} />
                        </form>
                        <button className="review-btn" onClick={ConfirmHandler} >ConFirm Order</button>
                        </div>
            
                        </div>
                </div>
                }
            </div>
        </div>
    );
};

export default Shipping;