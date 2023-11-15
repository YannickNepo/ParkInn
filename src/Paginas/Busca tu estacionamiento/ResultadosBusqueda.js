import React from 'react';

export default function ResultadosBusqueda({ location }) {
  const { state } = location;
  const estacionamientos = state?.estacionamientos || [];

  return (
    <div>
      <h2>Resultados de la búsqueda</h2>
      <ul>
        {estacionamientos.map(estacionamiento => (
          <li key={estacionamiento.id}>
            {/* Mostrar los detalles del estacionamiento */}
            <p>Dirección: {estacionamiento.direccion}</p>
            <p>Capacidad: {estacionamiento.capacidad}</p>
            {/* Otros detalles... */}
          </li>
        ))}
      </ul>
    </div>
  );
}
