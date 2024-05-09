'use client'
import Formulario from '@/app/components/ui/Formulario'
import React from 'react'
import Image from 'next/image'

const Solicitar = () => {
  return (
    <main className='container mx-auto py-12 '>
      <div className='container overflow-hidden rounded-full flex items-center py-12 gap-11 bg-blue-300'>
        <div className="w-1/2 ">
          <Image
            src='/chica2.jpg'
            height={500}
            width={500}
            alt='Imagen'
          />
        </div>
        <div>
          <Formulario tipo='tarjetas'/>
        </div>
      </div>
    </main>
  )
}

export default Solicitar
