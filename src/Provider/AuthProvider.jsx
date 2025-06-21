import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import  axios  from 'axios';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser?.email){
                const userData = {email:currentUser.email};
                axios.post('http://localhost:3000/jwt',userData,{
                    withCredentials:true,
                })
                .then(res=>{
                    console.log(res.data);
                    const string = JSON.stringify(res.data)
                    localStorage.setItem('token',string)
                }).catch(error=>{
                    console.log(error);
                })
            }
            setLoading(false)

        });
        return () => unsubscribe();
    }, [])
    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut,
        googleLogin,
        updateUserProfile,
        loading,
        setLoading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;