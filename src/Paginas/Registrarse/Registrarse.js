import React, { useState } from 'react';
import './Registrarse.css';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const redirectToLogin = () => {
  //   history('/login');
  // };

  const handleRegister = () => {
    // Aquí puedes realizar el fetch con los datos del formulario
    const data = {
      mail: email,
      username: username,
      password: password
    };

  

    // Ejemplo de envío usando fetch (debes adaptarlo a tu API o endpoint)
    fetch('https://fair-teal-clownfish.cyclic.app/CreateUser', {
      method: 'POST',
      headers: {
        Accept: "application/json, text/plain, */*,",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
      
    })
    .then(response => {
      // Manejar la respuesta de tu solicitud, por ejemplo:
      if (response.ok) {
        navigate('/Login');
       } else {
      //   // Manejar errores si la solicitud falla
       }
      alert("usuario creado");
    })
    .catch(error => {

    });
  };

  return (
    <div className='contenedor-registrarse'>
      <div className='info'>
        <h1 className='tituloR'>CREAR CUENTA</h1>
        <div className='contenedor-texto-Registrarse'>
          <input
            className='input-registrarse1'
            type='text'
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input-registrarse2'
            type='text'
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div>
            <input
              className='input-registrarse3'
              type='password'
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <h5>Ya tienes cuenta? <Link to="/Login">Inicia sesión</Link></h5>
        </div>
        <button type="button" className="boton" onClick={handleRegister}>
          <p className="boton-texto">&nbsp;REGISTRARSE</p>
        </button>
      </div>
    </div>
  );
}
