import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './components/ui/Button';
import PromosList from './components/promociones/promosList';

async function getData() {
  const res = await fetch('http://localhost:3000/api/productos/')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const parsedBody = res.json();
  console.log(JSON.stringify(parsedBody))
 
  return parsedBody
}

export default async function Home() {
  const data = await getData();
  return (
    <body>

    <main className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl mx-auto shadow-xl rounded-lg overflow-hidden md:flex items-center justify-center">
        <div className="md:flex-shrink-0 relative overflow-hidden">
          <Image
            src="/chica1.jpg"
            priority
            alt="Chica sonriente"
            width={800}
            height={600}
          
            />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 transition-opacity">
            <h1 className="text-4xl font-bold mb-4">¿Estás buscando tu primera tarjeta?</h1>
            <h2 className="text-2xl font-semibold mb-8">¡Con la tarjeta Master de Prestex puedes tenerla hoy!</h2>
            <Link href="/productos/tarjetas/solicitar">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">Solicita tu tarjeta</Button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-8 w-full border-gray-400" />
      <div className="container bg-white w-3/4 p-8 rounded-md shadow-md items-center">
        <h2 className="text-3xl font-bold mb-6">Promos</h2>
        <PromosList productos={data}/>
      </div>
    </main>
            </body>
  );
}

