import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import useAuth from '../Context/Contexthook';
const Privateroute = ({children, ...rest}) => {
    const {users} = useAuth();
    return (
        <Route
        {...rest}
        render = {({location}) => users.email ? children : 

            <Redirect
            to ={
            {
                pathname: '/login',
                state : {from: location}
            }
           }
            ></Redirect>
        }
        >

        </Route>
    );
};

export default Privateroute;