import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase.config';

const AuthProvider = ({children}) => {
     const provider = new GoogleAuthProvider();
    const [user,setUser]=useState(null);
    
    const [loading, setLoading] = useState(true);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userLogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const handleGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
    const handleLogOut=()=>{
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        };
    }, []);
    const userInfo={
        user,
        setUser,
        createUser,
        userLogIn,
        handleGoogle,
        handleLogOut,
        loading,
        setLoading,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;