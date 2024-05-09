// PromosDetail.js
import React from "react";

const PromosDetail = ({ id, descripcion, monto, titulo, img, cuotas }) => {
  return (
    <div className="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center">{titulo}</h2>
      <img src={img} alt={titulo} className="w-full mt-4" />
      <p className="mt-4">{descripcion}</p>
      <p className="mt-2">Monto: ${monto}</p>
      <p>Cuotas: {cuotas}</p>
    </div>
  );
};

export default PromosDetail;
