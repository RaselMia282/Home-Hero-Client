import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import{auth} from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup,signOut,updateProfile } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


// create user for reg
const createUser = (email,password)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth,email,password);
}
// google login
const googleProvider = new GoogleAuthProvider();
 const googleSignIn = ()=>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider);
 }
// update profile
const updateUserProfile = (name,photo)=>{
  setLoading(true);
  return updateProfile(auth.currentUser,{
    displayName:name,
    photoURL:photo,
  })
}

// forget password
const forgotPassword =(email)=>{
  setLoading(true);
  return sendPasswordResetEmail(auth,email)
}

// login for users
const signIn = (email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password);
}

// signout for users
const logOut = ()=>{
  setLoading(true);
  return signOut(auth)
}






  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const Authinfo = {
    user,
    loading,
    createUser,
    googleSignIn,
    updateUserProfile,
    forgotPassword,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
