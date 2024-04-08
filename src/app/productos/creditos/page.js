import Formulario from '@/app/components/ui/Formulario';
import React from 'react';

const CreditosPage = () => {
  return (
    <main className="container flex justify-center items-center mx-auto py-12">
      <div className="max-w-xl mx-auto p-8 rounded-3xl shadow-lg bg-blue-300 flex gap-8">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center">Solicita tu Préstamo ya!</h1>
          <p className="text-xl mb-8 text-center">Tenemos la opción más conveniente para vos</p>
        </div>
        <div className="flex-1">
          <Formulario tipo='creditos'/>
        </div>
      </div>
    </main>
  );
};

export default CreditosPage;
