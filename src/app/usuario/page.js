'use client'
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useSolicitud } from '../context/solicitudContext';

const Usuario = () => {
  const { user } = useAuth();
  const {solicitudes } = useSolicitud();

  if (!user) {
    return <div>Por favor, inicia sesión para ver tus solicitudes.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mt-8 mb-4">Tus Solicitudes</h1>
      {solicitudes.length === 0 ? (
        <p>No has realizado ninguna solicitud.</p>
      ) : (
        <ul>
          {solicitudes.map((solicitud) => (
            <li key={solicitud.id} className="mb-4 p-4 border rounded-md shadow">
              <p><strong>CI:</strong> {solicitud.ci}</p>
              <p><strong>Nombre:</strong> {solicitud.nombre}</p>
              <p><strong>Actividad:</strong> {solicitud.actividad}</p>
              <p><strong>Tipo de Solicitud:</strong> {solicitud.solicitud}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Usuario;
