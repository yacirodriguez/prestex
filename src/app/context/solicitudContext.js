'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';

const SolicitudContext = createContext();

export const useSolicitud = () => {
  return useContext(SolicitudContext);
};

export const SolicitudProvider = ({ children }) => {
  const { user } = useAuth();
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const fetchSolicitudes = async () => {
      if (user && user.email) {
        try {
          const q = query(collection(db, 'solicitudes'), where('email', '==', user.email));
          const querySnapshot = await getDocs(q);
          const solicitudesData = [];
          querySnapshot.forEach((doc) => {
            solicitudesData.push({ id: doc.id, ...doc.data() });
          });
          setSolicitudes(solicitudesData);
          localStorage.setItem('solicitudes', JSON.stringify(solicitudesData));
        } catch (error) {
          console.error("Error al obtener las solicitudes: ", error);
        }
      } else {
        const storedSolicitudes = localStorage.getItem('solicitudes');
        if (storedSolicitudes) {
          setSolicitudes(JSON.parse(storedSolicitudes));
        }
      }
    };

    fetchSolicitudes();
  }, [user]);

  return (
    <SolicitudContext.Provider value={{ solicitudes }}>
      {children}
    </SolicitudContext.Provider>
  );
};
