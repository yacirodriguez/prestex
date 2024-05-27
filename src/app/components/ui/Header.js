'use client'
import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { user } = useAuth();

    return (
        <>
            <header className='w-full bg-blue-900 shadow-xl fixed top-0 z-50'>
                <div className='container mx-auto py-3 flex justify-between items-center'>
                    <Link href="/" className='text-4xl font-bold text-slate-200 px-4 font-mono'>
                        Prestex
                    </Link>

                    <nav className='flex justify-between items-center font-bold gap-3 px-4'>
                        <div className="relative">
                            <Link href="/productos/tarjetas" className='text-base text-white p-4 px-4 font-sans text-1xl focus:outline-none'>
                                Tarjetas
                            </Link>
                            <Link href="/productos/creditos" className='text-base text-white p-4 px-4 font-sans text-1xl focus:outline-none'>
                                Créditos
                            </Link>
                        </div>

                        {/* Otros enlaces del menú */}
                        <Link href="/nosotros" className='text-base text-white p-4 px-4 font-sans text-1xl'>
                            Nosotros
                        </Link>
                        <Link href="/contacto" className='text-base text-white p-4 px-4 font-sans text-1xl'>
                            Contacto
                        </Link>

                        {/* Conditionally render the login or user button */}
                        {user ? (
                            <Link href="/usuario" className='text-base text-white p-4 px-4 font-sans text-1xl'>
                                Mi Usuario
                            </Link>
                        ) : (
                            <Link href="/login" className='text-base text-white p-4 px-4 font-sans text-1xl'>
                                Ingresar
                            </Link>
                        )}
                    </nav>
                </div>
            </header>
            <div className="mt-20">
                {/* Contenido de la página */}
            </div>
        </>
    );
};

export default Header;
