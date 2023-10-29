import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../../../Firebase';

export const AuthData=createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

     //Sign Up 
     const signUp=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)

     }
     const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)

     }
    const car="car"
    const data={car,signUp,login}
    return (
        <AuthData.Provider value={data}>
          {children}  
        </AuthData.Provider>
    );
};

export default AuthProvider;