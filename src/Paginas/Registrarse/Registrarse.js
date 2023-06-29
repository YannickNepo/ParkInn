import React from 'react';
import './Registrarse.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage(){

  const registroData = {
    username: 'nombreDeUsuario',
    email: 'correo@example.com',
    password: 'contraseña',
  };
  
  fetch('http://localhost:3000/Registrarse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registroData),
  })
    .then(response => {
      if (response.ok) {
        // Registro exitoso
        return response.json();
      } else {
        throw new Error('Error en el registro');
      }
    })
    .then(data => {
      // Manejar la respuesta del registro
      console.log(data);
    })
    .catch(error => {
      // Manejar errores del registro
      console.error(error);
    });




  const history = useNavigate();

  const redirectToLogin = () => {
    history('/Login');
  };

  return(
    <div className='contenedor-login'>
      <div className='info'>
        <h1 className='tituloR'>Crear cuenta
        </h1>
        <div className='contenedor-texto-Registrarse'>
            <input className='input-login' type='text' placeholder="Nombre de usuario"></input>
          <input className='input-login' type='mail' placeholder="Email"></input>
          <div>
            <input className='input-login' type='password' placeholder="Contraseña"></input> 
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
  