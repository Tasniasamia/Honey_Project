import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,updateProfile,signOut} from "firebase/auth";
import { app } from '../../../../Firebase';

export const AuthData=createContext();
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true)
    const auth = getAuth(app);

     //Sign Up 
     const signUp=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)

     }
     //login
     const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

     }
     //display name
const getName=(name,photo)=>{
setLoading(true);
return updateProfile(auth.currentUser, {
    displayName: name, photoURL:photo
  })
     
}
//LogOut
const logOut=()=>{
    signOut(auth).then(() => {
        setUser('')
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

     //manage user
     useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (user) => {
      

    if (user) {
        setUser(user);
        setLoading(false);
      const uid = user.uid;
    
    } else {
      // User is signed out
      // ...
    }

    return ()=>{
        unsubscribe()
    }
  });
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
    const car="car"
    const data={car,signUp,login,user,setUser,loading,setLoading,getName,logOut}
    return (
        <AuthData.Provider value={data}>
          {children}  
        </AuthData.Provider>
    );
};

export default AuthProvider;