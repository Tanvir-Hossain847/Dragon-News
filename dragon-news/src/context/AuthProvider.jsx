import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.init';


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const auth = getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)  
    }
    
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser =>{
            setUser(currentUser)
        }));
        return unsubscribe
    },[auth])

    const userInfo = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;