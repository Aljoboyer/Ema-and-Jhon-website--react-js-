import InitializeAuthentication from '../FirebaseSetup/Firebaseinit';
import {FacebookAuthProvider , getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {useEffect, useState} from 'react';

InitializeAuthentication();

const useFirebase = () => {
    const googlprovider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    const [users,setUsers] = useState({});

    //Registering user or creating user
    const RegisterUser = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
            
            const user = userCredential.user;
           
        })
        .catch((error) => {
            const errorMessage = error.message;
        });
    }

    //Sign With email and Password 
    const LoginWithPasswordEmail = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }


    //google sign in
    const SigninWithGoogle = () => {
        return signInWithPopup(auth, googlprovider)
    }
    //Sign in with facebook
    const FacebookSignin = () => {
        return signInWithPopup(auth, FacebookProvider)
         
    }
    //current user cathing
    useEffect(() => {
               onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
          });
    },[])

    //log out
    const LogOut = () => {
        return signOut(auth);
    }
    return{
        setUsers,
        users,
        SigninWithGoogle,
        LogOut,
        RegisterUser,
        LoginWithPasswordEmail,
        FacebookSignin
    };
}

export default useFirebase;