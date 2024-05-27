import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config'; // Importa tu configuración de Firebase

const Formulario = ({ tipo }) => {
  const [ci, setCi] = useState('');
  const [nombre, setNombre] = useState('');
  const [actividad, setActividad] = useState('');
  const [solicitud, setSolicitud] = useState('');
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCiChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCi(value);
      setError('');
    } else {
      setError('Documento inválido. Solo se permiten números.');
    }
  };

  const handleNombreChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setNombre(value);
      setError('');
    } else {
      setError('Nombre inválido. Solo se permiten letras.');
    }
  };

  const handleActividadChange = (e) => {
    setActividad(e.target.value);
  };

  const handleSolicitudChange = (e) => {
    setSolicitud(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario haga un envío normal

    if (error) {
      return;
    }

    // Crea un objeto con los datos del formulario
    const data = {
      ci,
      nombre,
      actividad,
      solicitud,
    };

    try {
      // Verifica si ya existe una solicitud igual en la base de datos
      const querySnapshot = await getDocs(query(collection(db, 'solicitudes'), where('ci', '==', ci), where('nombre', '==', nombre), where('actividad', '==', actividad), where('solicitud', '==', solicitud)));

      if (!querySnapshot.empty) {
        setError('Ya tienes una solicitud en curso.');
        return;
      }

      // Agrega los datos del formulario a la colección 'solicitudes' en Firestore
      await addDoc(collection(db, 'solicitudes'), data);
      setSolicitudEnviada(true);
      // Limpiar el formulario después de enviarlo
      setCi('');
      setNombre('');
      setActividad('');
      setSolicitud('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-8 mb-4">Formulario de solicitud</h1>
      {isClient && solicitudEnviada && <p className="text-green-500">Tu solicitud fue enviada con éxito.</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form className="max-w-md" onSubmit={handleSubmit}>
        {/* Input para la cédula de identidad */}
        <input
          type="text"
          value={ci}
          onChange={handleCiChange}
          placeholder="Cédula de Identidad"
          className="w-full px-3 py-2 mb-4 border rounded-md"
          required
        />

        {/* Input para el nombre */}
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Nombre"
          className="w-full px-3 py-2 mb-4 border rounded-md"
          required
        />

        {/* Select para el tipo de actividad */}
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
              <option value="nueva">Activo</option>
              <option value="adicional">Jubilado</option>
            </>
          )}
        </select>

        {/* Select para el tipo de solicitud */}
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

        {/* Botón para enviar el formulario */}
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
