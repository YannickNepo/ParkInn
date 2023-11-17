import React from "react";
import './MiPerfil.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';
import { useNameContext, usePasswordContext, useUserContext } from '../../App';
import {  } from "../../App";


export default function MiPerfil() {
  const history = useNavigate();
  const { name, updateUserName } = useNameContext(); 
  const {password, updatePassword} = usePasswordContext();
  const { userID, updateUserID } = useUserContext();
  

  const redirectToMenuInicio = () => {
    history('/MenuInicio');
  }

  // Obtener los datos del usuario desde localStorage
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  const estacionamientoPublicado = JSON.parse(localStorage.getItem('estacionamientoPublicado'));

  return (
    <div className='contenedor-MP'>
      <div className="LogoPE" >
        <button type="button" className="btn_logo" onClick={redirectToMenuInicio}>
          <img src={logo} alt="Botonlogo" />
        </button>
      </div>
      <div className='perfil'>
        <h2>Tu perfil</h2>
        <p><strong>Nombre de usuario:</strong> {name}</p>
        <p><strong>Contraseña:</strong> {password}</p>

        {/* Mostrar datos del estacionamiento publicado */}
        {estacionamientoPublicado && (
          <>
            <h2>Estacionamiento Publicado</h2>
            <p><strong>Dirección:</strong> {estacionamientoPublicado.direccion}</p>
            <p><strong>Capacidad:</strong> {estacionamientoPublicado.capacidad}</p>
            <p><strong>Contacto:</strong> {estacionamientoPublicado.contacto}</p>
            <p><strong>Tipo:</strong> {estacionamientoPublicado.tipo}</p>
            <p><strong>Fecha Desde:</strong> {estacionamientoPublicado.fechaDesde}</p>
            <p><strong>Fecha Hasta:</strong> {estacionamientoPublicado.fechaHasta}</p>
            <p><strong>Barrio:</strong> {estacionamientoPublicado.barrio}</p>
          </>
        )}

        <button className="botonCerrar" onClick={() => {
          updatePassword(null);
          updateUserID(null);
          updateUserName(null);
          history('/');
        }}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
