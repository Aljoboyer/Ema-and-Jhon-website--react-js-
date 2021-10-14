import React, { useState } from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Context/Contexthook';
import { useForm } from "react-hook-form";
import './login.css'
const Login = () => {
    const {SigninWithGoogle,LoginWithPasswordEmail,FacebookSignin} = useAuth();
    const [error,setError] = useState('')
    const [watching, setWatching] = useState('password')
    const [iconclass, setIconclass] = useState('fas fa-ban fa-2x')
    const History = useHistory();
    const location = useLocation();
    const Redirectui = location.state?.from  || '/';

    const GoogleSigninHandler = () => {
        SigninWithGoogle()
        .then((result) => {
            History.push(Redirectui);
        
        })
    }
    const FacebookLoginHandler = () => {
        FacebookSignin()
        .then((result) => {
            History.push(Redirectui);
        })
        .catch((error) => {

        });
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {email,password} = data;
        LoginWithPasswordEmail(email,password)
        .then((result) => {
            History.push(Redirectui);

        })
        .catch((error) => {
            setError('Your Email Or Password is Wrong');
        });
    }
    const WatchHandling  = () => {
        if(watching === 'text')
        {
            setWatching('password')
            setIconclass('fas fa-ban fa-2x')
        }
        else{
            setWatching('text')
            setIconclass('fas fa-eye fa-2x')
        }
    }
    return (
      <div className="div">
            <div className="row mb-4">
            <div className="d-flex justify-content-center mt-4 col-lg-12 col-sm-12">
                <div className="w-50">
                <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Log-in Here</h2>
                <p className="text-danger">{error}</p>
                        <label htmlFor="">Email</label>
                        <input className="w-100" type="email" {...register("email", { required: true })} />
                        <label htmlFor="">Password</label>
                        <input className="w-100" type ={watching} {...register("password", { required: true })} />
                        <p><i onClick={WatchHandling} className={iconclass}></i></p>

                        {errors.exampleRequired && <span>This field is required</span>}
        
                        <input className="review-btn" type="submit" />
                </form>
                <p><i className="mt-3 mb-2 text-center far fa-circle fa-2x">R</i></p>
                    <h5 className="mb-3 text-dark fw-bold">Sign in with</h5>
                    <i onClick={FacebookLoginHandler} className=" fab fa-facebook fa-3x"></i>
                    <i onClick={GoogleSigninHandler} className="ms-2 fab fa-google fa-3x"></i>
                <p className="mt-3" ><small>New to ema-jhon?</small></p>
               <p className="fs-5 fw-bold" > <Link to="/register" >Create Ema-Jhon Account</Link></p>
                </div>

                </div>
        </div>
      </div>
    );
};

export default Login;