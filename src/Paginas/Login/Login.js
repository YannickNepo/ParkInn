import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
  const history = useNavigate();

  const redirectToAnotherRoute = () => {
    history('/');
  };

  return(
    <div className='contenedor-login'>
      <div className='info'>
       
        <h1 className='titulo'>INICIO DE SESIÓN
        </h1>
        <div className='contenedor-texto-login'>
          <input className='input-login'type='text' placeholder="Nombre de usuario"></input>
          <input className='input-login'type='password' placeholder="Contraseña"></input>
          <h5>No tienes cuenta? <Link to="/register">Registrate</Link></h5>
        </div>
        <button type="button" className="boton" onClick={redirectToAnotherRoute}>
          <p className="boton-texto">&nbsp;INICIAR SESION</p>
        </button>
      </div>
    </div>
  );
}
