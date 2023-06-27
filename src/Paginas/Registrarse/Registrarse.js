import React from 'react';
import './Registrarse.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage(){

  const history = useNavigate();

  const redirectToAnotherRoute = () => {
    history('/');
  };

  return(
    <div className='contenedor-login'>
      <div className='info'>
        <h1 className='titulo'>Crear cuenta
        </h1>
        <div className='contenedor-texto-login'>
            <input className='input-login' type='text' placeholder="Nombre de usuario"></input>
          <input className='input-login' type='mail' placeholder="Email"></input>
          <div>
            <input className='input-login' type='password' placeholder="Contraseña"></input> 
          </div>
          <h5>Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></h5>   
        </div>
        <button type="button" className="boton" onClick={redirectToAnotherRoute}>
          <p className="boton-texto">REGISTRARSE</p>
        </button>
       </div>
     </div>
   );
}
  