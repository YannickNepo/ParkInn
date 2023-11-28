import React, { useState, useEffect } from "react";
import './BuscaTuEst.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../App';

export default function BuscaEstacionamiento() {
  const history = useNavigate();
  const [estacionamientos, setEstacionamientos] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [mostrarTitulos, setMostrarTitulos] = useState(true); // Estado para controlar la visibilidad de los títulos
  const { userID } = useUserContext();

  const redirectToResultados = async () => {
    const direccion = document.querySelector('.input-Ubi').value;
    const barrio = document.querySelector('.barrios').value;

    try {
      const response = await fetch('https://fair-teal-clownfish.cyclic.app/GetParkBarrio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ barrio }) // Envía el barrio en el cuerpo de la solicitud
      });

      if (response.ok) {
        const data = await response.json();
        const filteredEstacionamientos = data.filter(est => est.userID !== userID); // Filtra estacionamientos por userID
        setEstacionamientos(filteredEstacionamientos);
        setMostrarResultados(true); // Mostrar resultados
        setMostrarTitulos(false); // Ocultar títulos
      } else {
        console.error('Error al obtener los estacionamientos');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  }

  return (
    <div className='contenedor-BE'>
      <div className="LogoBE">
        <button type="button" className="btn_logo" onClick={() => history('/MenuInicio')}>
          <img src={logo} alt="Botonlogo" />
        </button>
      </div>
      <div className='info'>
        {mostrarTitulos && ( // Mostrar títulos solo si mostrarTitulos es verdadero
          <div>
            <h1 className='tituloBE'>Busca estacionamiento por tu zona</h1>
            
          </div>
        )}
        {!mostrarResultados && (
          <div className='contenedor-texto-BE'>
            <label className='UbiActual'>Escribi tu dirección actual</label>
            <input className='input-Ubi' type='text' placeholder="" />
            <label className='Barrio'>Seleccione su barrio</label>
            <select className="barrios">
              <option value="Palermo">Palermo</option>
              <option value="Belgrano">Belgrano</option>
              <option value="Nuñez">Nuñez</option>
              <option value="Almagro">Almagro</option>
            </select>
            <button type="button" className="botonBuscar" onClick={redirectToResultados}>
              <p className="boton-texto">&nbsp;Buscar</p>
            </button>
          </div>
        )}
        {mostrarResultados && (
          <div className="resultados">
            {estacionamientos.length > 0 ? (
              <ul>
                {estacionamientos.map((estacionamiento, index) => (
                  <li key={index}>
                    <h3>Estacionamiento {index + 1}</h3>
                    <p><strong>Dirección:</strong> {estacionamiento.adress}</p>
                    <p><strong>Tipo:</strong> {estacionamiento.type}</p>
                    <p><strong>Capacidad:</strong> {estacionamiento.capacity}</p>
                    <p><strong>Contacto:</strong> {estacionamiento.contact}</p>
                    <p><strong>Barrio:</strong> {estacionamiento.barrio}</p>
                    {/* Otros detalles */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No se encontraron estacionamientos.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
