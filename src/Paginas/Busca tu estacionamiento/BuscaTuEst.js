import React, { useState } from "react";
import './BuscaTuEst.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';

export default function BuscaEstacionamiento() {
  const history = useNavigate();
  const [estacionamientos, setEstacionamientos] = useState([]);

  const redirectToResultados = async () => {
    const direccion = document.querySelector('.input-Ubi').value;
    const barrio = document.querySelector('.barrios').value;

    try {
      const response = await fetch(`https://tu-backend.com/estacionamientos?direccion=${direccion}&barrio=${barrio}`);
      if (response.ok) {
        const data = await response.json();
        setEstacionamientos(data); // Guardar los estacionamientos en el estado
        history('/resultados', { estacionamientos: data });
      } else {
        console.error('Error al obtener los estacionamientos');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  }

  return (
    <div className='contenedor-BE'>
      <div className="LogoBE" >
        <button type="button" className="btn_logo" onClick={() => history('/MenuInicio')}>
          <img src={logo} alt="Botonlogo" />
        </button>
      </div>
      <div className='info'>
        <h1 className='tituloBE'>Busca estacionamiento por tu zona</h1>
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
      </div>
    </div>
  );
}
