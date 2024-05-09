import React from 'react';
import Image from 'next/image';

const PromosCard = ({ slug, titulo, descripcion, img }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <Image
             src={img} 
             alt={titulo}
             height={300}
             width={300} 
             className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-bold">{titulo}</h3>
            <p className="text-gray-500">{descripcion}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Ver detalles</button>
        </div>
    );
};

export default PromosCard;