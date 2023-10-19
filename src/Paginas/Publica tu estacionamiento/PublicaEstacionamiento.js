import React from "react";
import './PublicaEstacionamiento.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';


export default function PublicaEstacionamiento(){
  const history = useNavigate();
  const redirectToMenuInicio = () => {
    history('/MenuInicio');
  }

  return(
    <div className='contenedor-PE'>
      <div className="LogoPE" >
      <button type="button" className="btn_logo" onClick={redirectToMenuInicio}>
      <img src={logo} alt="Botonlogo" />
      </button>
      </div>
      <div className='info'>
        <h1 className='tituloPE'>Completa la siguiente informacion
        </h1>
        <div className='contenedor-texto-PE'>
            <input className='input-Direccion' type='text' placeholder="Escribi tu direccion"></input>
          <input className='input-Barrio' type='text' placeholder="Escribi tu barrio"></input>
          <div>
            <input className='input-referencia' type='text' placeholder="Escribi un numero de telefono"></input> 
          </div>
          

    </div>
    </div>
    </div>
  );
  } 




  