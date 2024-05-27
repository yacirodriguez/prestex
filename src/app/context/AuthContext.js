'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const registerUser = async (values) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            const user = userCredential.user;
            setUser({ logged: true, email: user.email, uid: user.uid });
        } catch (error) {
            console.error(error);
        }
    };

    const loginUser = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUser({ logged: true, email: user.email, uid: user.uid });
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log(signOut)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
