import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){


  const loginData = {
    username: 'chona',
    password: 'chona123',
  };
  
  fetch('http://localhost:3000/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })
    .then(response => {
      if (response.ok) {
        // Inicio de sesión exitoso
        return response.json();
      } else {
        throw new Error('Error en el inicio de sesión');
      }
    })
    .then(data => {
      // Manejar la respuesta del inicio de sesión
      console.log(data);
    })
    .catch(error => {
      // Manejar errores del inicio de sesión
      console.error(error);
    });

  const history = useNavigate();

  const redirectToAnotherRoute = () => {
    history('/vacio');
  };

  return(
    <div className='contenedor-login'>
      <div className='info'>
       
        <h1 className='titulo'>INICIO DE SESIÓN
        </h1>
        <div className='contenedor-texto-login'>
          <input className='input-login'type='text' placeholder="Nombre de usuario"></input>
          <input className='input-login'type='password' placeholder="Contraseña"></input>
          <h5>No tienes cuenta? <Link to="/registrarse">Registrate</Link></h5>
        </div>
        <button type="button" className="boton" onClick={redirectToAnotherRoute}>
          <p className="boton-texto">&nbsp;INICIAR SESION</p>
        </button>
      </div>
    </div>
  );
}
