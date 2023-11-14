import React from "react";
import './BuscaTuEst.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';


export default function BuscaEstacionamiento(){
  const history = useNavigate();
  const redirectToMenuInicio = () => {
    history('/MenuInicio');
  }

  return(
    <div className='contenedor-BE'>
      <div className="LogoBE" >
      <button type="button" className="btn_logo" onClick={redirectToMenuInicio}>
      <img src={logo} alt="Botonlogo" />
      </button>
      </div>
      <div className='info'>
        <h1 className='tituloBE'>Busca estacionamiento por tu zona
        </h1>
        <div className='contenedor-texto-BE'>
        <label className='UbiActual'>Escribi tu direccion actual</label>
          <input className='input-Ubi' type='text' placeholder="" />
        <label className='Barrio' >Seleccione su barrio</label>
    <select className="barrios">
        <option value="Palermo">Palermo</option>
        <option value="Belgrano">Belgrano</option>
        <option value="Nuñez">Nuñez</option>
        <option value="Almagro">Almagro</option>
    </select> 
          <button type="button" className="botonBuscar" onClick={redirectToMenuInicio}>
          <p className="boton-texto">&nbsp;Buscar</p>
        </button>
          

    </div>
    </div>
    </div>
  );
  } 
