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
        <div className='contenedor-texto-PE'>
          <label className='Dire' >Seleccione su direccion</label>
            <input className='input-Direccion' type='text' placeholder=""></input>
            <label className='Capacidad' > Capacidad del estacionamiento</label>
          <input className='input-Capacidad' type='number' placeholder=""></input>
          <label className='Contacto' >Numero de contacto</label>
            <input className='input-Contacto' type='tel' placeholder=""></input>
          <div>
          <label className='Tipo' > Tipo del estacionamiento</label>
            <input className='input-Tipo' type='text' placeholder="Por ejemplo: Techado"></input> 
          <label className='Fecha' > Fechas</label>
            <input className='input-Fecha' type='date' placeholder=""></input> 
          </div>
          <button type="button" className="botonPublicar" onClick={redirectToMenuInicio}>
          <p className="boton-texto">&nbsp;Publicar</p>
        </button>
          

    </div>
    </div>
    </div>
  );
  } 




  