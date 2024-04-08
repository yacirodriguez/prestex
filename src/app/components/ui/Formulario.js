'use client'

import React, { useState } from 'react';

const Formulario = ({ tipo }) => {
  const [ci, setCi] = useState('');
  const [nombre, setNombre] = useState('');
  const [actividad, setActividad] = useState('');
  const [solicitud, setSolicitud] = useState('');

  const handleCiChange = (e) => {
    setCi(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleActividadChange = (e) => {
    setActividad(e.target.value);
  };

  const handleSolicitudChange = (e) => {
    setSolicitud(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-8 mb-4">Formulario de solicitud</h1>
      <form className="max-w-md">
        <input
          type="text"
          value={ci}
          onChange={handleCiChange}
          placeholder="Cédula de Identidad"
          className="w-full px-3 py-2 mb-4 border rounded-md"
          required
        />

        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Nombre"
          className="w-full px-3 py-2 mb-4 border rounded-md"
          required
        />

        <select
          value={actividad}
          onChange={handleActividadChange}
          className="w-full px-3 py-2 mb-4 border rounded-md"
          required
        >
          <option value="">Tipo de Actividad</option>
          {tipo === 'creditos' && (
            <>
              <option value="jubilado">Jubilado</option>
              <option value="activo">Activo</option>
            </>
          )}
          {tipo === 'tarjetas' && (
            <>
              <option value="nueva">Tarjeta Nueva</option>
              <option value="adicional">Tarjeta Adicional</option>
            </>
          )}
        </select>

        <select
          value={solicitud}
          onChange={handleSolicitudChange}
          className="w-full px-3 py-2 mb-4 border rounded-md"
          required
        >
          <option value="">Tipo de Solicitud</option>
          {tipo === 'creditos' && (
            <>
              <option value="nuevo">Crédito Nuevo</option>
              <option value="renovacion">Renovación de Crédito</option>
            </>
          )}
          {tipo === 'tarjetas' && (
            <>
              <option value="nueva">Tarjeta Nueva</option>
              <option value="adicional">Tarjeta Adicional</option>
            </>
          )}
        </select>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar solicitud
        </button>
      </form>
    </div>
  );
};

export default Formulario;
