import React from 'react';

const Header = () => {
  return (
    <>
      <header className='w-full bg-blue-900 shadow-xl fixed top-0 z-50'>
        <div className='container mx-auto py-3 flex justify-between items-center'>
          <a href="/" className='text-4xl font-bold text-slate-200 px-4 font-mono'>
            Prestex
          </a>

          <nav className='flex justify-between items-center font-bold gap-3 px-4'>
            <div className="relative">
              <a href="/productos/tarjetas" className='text-base text-white p-4 px-4 font-sans text-1xl focus:outline-none'>
                Tarjetas
              </a>
              <a href="/productos/creditos" className='text-base text-white p-4 px-4 font-sans text-1xl focus:outline-none'>
                Créditos
              </a>
            </div>

            {/* Otros enlaces del menú */}
            <a href="/nosotros" className='text-base text-white p-4 px-4 font-sans text-1xl'>
              Nosotros
            </a>
            <a href="/contacto" className='text-base text-white p-4 px-4 font-sans text-1xl'>
              Contacto
            </a>
            <a href="/login" className='text-base text-white p-4 px-4 font-sans text-1xl'>
              Ingresar
            </a>
          </nav>
        </div>
      </header>
      <div className="mt-20"> {/* Espacio para el navbar fijo */}
        {/* Contenido de la página */}
      </div>
    </>
  );
};

export default Header;
