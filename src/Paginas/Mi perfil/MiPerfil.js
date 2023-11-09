import React from "react";
import './MiPerfil.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';

export default function MiPerfil(){
    const history = useNavigate();
    const redirectToMenuInicio = () => {
      history('/MenuInicio');
    }

    // Obtener los datos del usuario desde localStorage
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    return(
      <div className='contenedor-MP'>
        <div className="LogoPE" >
          <button type="button" className="btn_logo" onClick={redirectToMenuInicio}>
            <img src={logo} alt="Botonlogo" />
          </button>
        </div>
        <div className='perfil'>
          <h2>Tu perfil</h2>
          <p><strong>Nombre de usuario:</strong> {userProfile ? userProfile.username : 'N/A'}</p>
          <p><strong>Contraseña:</strong> {userProfile ? userProfile.password : 'N/A'}</p>
          <button className="botonCerrar" onClick={() => {
            localStorage.removeItem('userProfile'); // Borra los datos del usuario al cerrar sesión
            history('/'); // Redirige al usuario al inicio de sesión
          }}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    );
}
