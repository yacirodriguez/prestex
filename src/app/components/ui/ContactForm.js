'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [values, setValues] = useState({
    reason: 'consulta',
    message: ''
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los valores del formulario, por ejemplo, a través de una función que maneje el envío del mensaje.
    console.log('Valores del formulario:', values);
    // Aquí puedes reiniciar el estado del formulario si lo deseas
    setValues({
      reason: 'consulta',
      message: ''
    });
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">Motivo de contacto:</label>
      <select className="block w-full p-2 border border-gray-300 rounded-md" id="reason" name="reason" value={values.reason} onChange={handleChange}>
        <option value="consulta">Consulta</option>
        <option value="reclamo">Reclamo</option>
        <option value="sugerencia">Sugerencia</option>
      </select>
      
      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="message">Mensaje:</label>
      <textarea className="block w-full p-2 border border-gray-300 rounded-md" id="message" name="message" value={values.message} onChange={handleChange}></textarea>

      <button className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4" type="submit">Enviar mensaje</button>
    </form>
  );
};

export default ContactForm;
