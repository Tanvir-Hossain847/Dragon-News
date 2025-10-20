import React, { createContext, useState } from 'react';
export const AuthContext = createContext()
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.init';


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const auth = getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)  
    } 

    const userInfo = {
        user,
        setUser,
        createUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;