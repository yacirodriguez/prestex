'use client'
import React, { useState } from 'react';
import { Link } from 'next/link';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [SignInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await SignInWithEmailAndPassword(email, password);
            console.log({ res });
            setEmail('');
            setPassword('');
            router.push('/')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Inicio de sesión</h2>
                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-md">Iniciar sesión</button>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <p className="text-sm text-gray-700">Tu información está segura con nosotros</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">¿No tienes una cuenta?</p>
        </div>
    );
};

export default Login;
