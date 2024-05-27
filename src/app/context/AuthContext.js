'use client'
import React, { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config'; // Asegúrate de importar desde la ubicación correcta

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const registerUser = async (values) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            const user = userCredential.user;
            setUser(user);
        } catch (error) {
            console.error(error);
        }
    };

    const loginUser = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUser(user);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};
