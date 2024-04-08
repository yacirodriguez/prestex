import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from "@/app/components/ui/Button"

const Tarjetas = () => {
  return (
    <div className="bg-blue-100 py-12">
            <div className="container bg-white">

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg md:w-1/2 md:mr-8">
                    <Image
                        src="/tarjeta.jpg"
                        alt="Tarjeta"
                        width={300}
                        height={300}
                        className="w-full"
                        />
                </div>
                <div className="max-w-lg mx-auto md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">Solicita tu Tarjeta hoy!</h1>
                    <h2 className="text-xl mb-8">Comienza a disfrutar todos los beneficios!</h2>
                    <div className="p-4 gap-2">
                        <h3 className="text-xl font-bold mb-4">MasterCard Internacional</h3>
                        <h3 className="text-lg mb-2">✔️Tarjetas adicionales sin costo</h3>
                        <h3 className="text-lg mb-2">✔️Retiros en efectivo</h3>
                        <h3 className="text-lg mb-2">✔️Cuotas sin recargo</h3>
                        <h3 className="text-lg mb-2">✔️Más de 20.000 locales con descuentos</h3>
                        <h3 className="text-lg mb-2">✔️Cine gratis para vos y tu familia</h3>
                    </div>
                    
                <Link href="/productos/tarjetas/solicitar">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">Solicita tu tarjeta</Button>
                </Link>
                </div>
            </div>
        </div>
        </div>
        )
}


export default Tarjetas