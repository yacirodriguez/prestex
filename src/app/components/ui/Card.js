'use client'
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '@/app/firebase/config'; // Importa el objeto db

const Card = () => {
  return (
    <div>
      {productos.map(producto => (
        <div key={producto.titulo} className="bg-white p-4 shadow-md rounded-lg">
          <img src={producto.img} alt={producto.titulo} className="w-full h-40 object-cover mb-4" />
          <h2 className="text-xl font-semibold">{producto.titulo}</h2>
          <p className="text-gray-600">{producto.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
