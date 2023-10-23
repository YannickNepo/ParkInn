import React from 'react';
import './Registrarse.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage(){
  const history = useNavigate();

  const redirectToLogin = () => {
    history('/Login');
  };

  return(
    <div className='contenedor-registrarse'>
      <div className='info'>
        <h1 className='tituloR'>CREAR CUENTA
        </h1>
        <div className='contenedor-texto-Registrarse'>
            <input className='input-registrarse1' type='text' placeholder="Email"></input>
          <input className='input-registrarse2' type='mail' placeholder="Nombre de usuario"></input>
          <div>
            <input className='input-registrarse3' type='password' placeholder="Contraseña"></input> 
          </div>
          <h5>Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></h5>   
        </div>
        <button type="button" className="boton" onClick={redirectToLogin}>
          <p className="boton-texto">&nbsp;REGISTRARSE</p>
        </button>
       </div>
     </div>
   );
}
  