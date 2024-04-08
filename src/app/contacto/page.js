import React from 'react';
import ContactForm from '../components/ui/ContactForm';

const Contacto = () => {
  return (
    <main className='container flex flex-col items-center justify-center mx-auto'>
      <h1 className='text-xl font-bold my-4'>Contactate con nosotros</h1>
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </main>
  );
};

export default Contacto;
