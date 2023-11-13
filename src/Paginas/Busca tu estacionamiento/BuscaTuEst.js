import React, { useState } from 'react';
import './BuscaTuEst.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';

const UbicacionActual = ({ onLocationChange }) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Utiliza la API de geocodificación de Google Maps para obtener la dirección
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=TU_CLAVE_DE_API_DE_GOOGLE_MAPS`
          );

          if (response.ok) {
            const data = await response.json();
            const address = data.results[0].formatted_address;
            setCurrentLocation(address);
            onLocationChange(address);
          } else {
            console.error('Error al obtener la dirección desde la API de Google Maps');
          }
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
        }
      );
    } else {
      console.error('El navegador no soporta la geolocalización');
    }
  };

  return (
    <div>
      <button onClick={handleGetLocation}>Utilizar Ubicación Actual</button>
      {currentLocation && <p>Dirección actual: {currentLocation}</p>}
    </div>
  );
};

export default function BuscaEstacionamiento() {
  const history = useNavigate();
  const [selectedBarrio, setSelectedBarrio] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  const redirectToMenuInicio = () => {
    history('/MenuInicio');
  };

  const handleBuscarClick = () => {
    // Puedes utilizar selectedBarrio y currentLocation en tu lógica de búsqueda
    console.log('Barrio seleccionado:', selectedBarrio);
    console.log('Ubicación actual:', currentLocation);
    // Realiza la búsqueda o cualquier otra lógica aquí
  };

  return (
    <div className='contenedor-BE'>
      <div className="LogoBE">
        <button type="button" className="btn_logo" onClick={redirectToMenuInicio}>
          <img src={logo} alt="Botonlogo" />
        </button>
      </div>
      <div className='info'>
        <h1 className='tituloBE'>Busca estacionamiento por tu zona</h1>
        <div className='contenedor-texto-BE'>
          <label className='Barrio'>Seleccione su barrio</label>
          <select
            className="barrios"
            value={selectedBarrio}
            onChange={(e) => setSelectedBarrio(e.target.value)}
          >
            <option value="Palermo">Palermo</option>
            <option value="Belgrano">Belgrano</option>
            <option value="Nuñez">Nuñez</option>
            <option value="Almagro">Almagro</option>
          </select>
          <UbicacionActual onLocationChange={(location) => setCurrentLocation(location)} />
          <button type="button" className="botonPublicar" onClick={handleBuscarClick}>
            <p className="boton-texto">&nbsp;Buscar</p>
          </button>
        </div>
      </div>
    </div>
  );
}
