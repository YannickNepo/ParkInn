import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Resultados() {
  const location = useLocation();
  const { estacionamientos } = location.state;

  return (
    <div>
      <h1>Estacionamientos encontrados:</h1>
      {estacionamientos.length > 0 ? (
        <ul>
          {estacionamientos.map((estacionamiento, index) => (
            <li key={index}>
              <h2>Estacionamiento {index + 1}</h2>
              <p><strong>Dirección:</strong> {estacionamiento.direccion}</p>
              <p><strong>Capacidad:</strong> {estacionamiento.capacidad}</p>
              <p><strong>Contacto:</strong> {estacionamiento.contacto}</p>
              <p><strong>Tipo:</strong> {estacionamiento.tipo}</p>
              {/* Añade aquí los demás datos que desees mostrar */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron estacionamientos con los criterios seleccionados.</p>
      )}
    </div>
  );
}
