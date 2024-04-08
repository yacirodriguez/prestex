'use client'
import React from 'react';

const ContactForm = () => {
  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">Motivo de contacto:</label>
      <select className="block w-full p-2 border border-gray-300 rounded-md" id="reason" name="reason">
        <option value="consulta">Consulta</option>
        <option value="reclamo">Reclamo</option>
        <option value="sugerencia">Sugerencia</option>
      </select>
      
      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="message">Mensaje:</label>
      <textarea className="block w-full p-2 border border-gray-300 rounded-md" id="message" name="message"></textarea>

      <button className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4" type="submit">Enviar mensaje</button>
    </form>
  );
};

export default ContactForm;
