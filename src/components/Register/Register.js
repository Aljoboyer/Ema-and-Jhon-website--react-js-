import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Context/Contexthook';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {RegisterUser,users} = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const [success2, setSuccess2] = useState('')

    const onSubmit = data => {
        const {email,password,ReEnterPassword} = data
        if(password === ReEnterPassword)
        {
            RegisterUser(email,password)
            setSuccess2('Register Success')
            setSuccess('fas fa-check-circle fa-2x')
        }
        else{
            setError('Password Doesnt Match')
        }
    }
    return (
        <div className="div">
        <div className="row mb-4">
        <div className="d-flex justify-content-center mt-4 col-lg-12 col-sm-12">
            <div className="w-50">
                 {
                   users.email ? <h2 className="text-dark" >{success2} <i className={success}></i></h2> :  <form onSubmit={handleSubmit(onSubmit)}>
                   <h2>Create Account</h2>
                   <label htmlFor="">Name</label>
                               <input className="w-100" type ="text" {...register("name", { required: true })} />
                               {errors.name && <p className="text-danger">This field is required</p>}
       
                               <label htmlFor="">Email</label>
                               <input className="w-100" type="email" {...register("email", { required: true })} />
                               {errors.email && <p className="text-danger">This field is required</p>}
       
                               <label htmlFor="">Password</label>
                               <input className="w-100" type ="password" {...register("password", { required: true,pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, min: 6,  })} />
                               {errors.password && <p className="text-danger">should contain at least one digit,one lower case,one upper case,8 from the mentioned characters</p>}
       
                               <label htmlFor="">Re-Enter Password</label>
                               <input className="w-100" type ="password" {...register("ReEnterPassword", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, min: 6 })} />
                               {errors.ReEnterPassword && <p className="text-danger">should contain at least one digit,one lower case,one upper case,8 from the mentioned characters</p>}
                               {errors.password || <p className="text-danger">{error}</p>}
                           <input className="mb-3" type="submit" />
                           <p className="mb-3 mt-3">Already Have an Account ?</p>
                            <p className="fs-5 fw-bold" ><Link to="/login" >Log in</Link></p>
                   </form>
                }
           
            </div>

            </div>
    </div>
  </div>
    );
};

export default Register;