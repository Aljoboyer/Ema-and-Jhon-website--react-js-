import React, { createContext } from 'react';
import useFirebase from '../FirebaseAuth/UseFirebase';

export const Authcontext  = createContext();
const Authprovider = ({children}) => {
    const Allconext = useFirebase()
    return (
        <Authcontext.Provider value={Allconext}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;