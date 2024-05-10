'use client'
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const { signInWithEmailAndPassword } = useAuth();
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(values.email, values.password);
            // Si el inicio de sesión es exitoso, puedes redirigir al usuario o realizar alguna otra acción
        } catch (error) {
            // Manejo de errores
            console.error(error);
            setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inicia Sesion</h2>
                </div>
                {error && <div className="text-red-500 text-center">{error}</div>}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            value={values.password}
                            onChange={handleChange}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Iniciar Sesion
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <p>¿No tienes una cuenta? <Link href="/signup"><span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">Crear una cuenta</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
