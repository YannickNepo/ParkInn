import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validar que el nombre de usuario y la contraseña no estén vacíos
    if (!username || !password) {
      alert('Por favor, introduce nombre de usuario y contraseña.');
      return;
    }

    // Objeto con los datos a enviar
    const loginData = {
      username: username,
      password: password 
    };
    
    // Realizar la solicitud fetch
    fetch('https://fair-teal-clownfish.cyclic.app/loginValidation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => {
        // Manejar la respuesta del servidor
        if (response.ok) {
          alert("usuario encontrado");
          history('/MenuInicio');
        } else {
          // Verificar si la respuesta indica credenciales inválidas
          if (response.status === 401) {
            alert('Nombre de usuario o contraseña incorrectos');
          } else {
            alert('Error en la solicitud');
          }
        }
      })
      .catch(error => {
        // Manejar errores de la solicitud
        console.error('Error:', error);
        // Podrías mostrar un mensaje de error al usuario, redirigirlo a una página de error, etc.
      });
  };

  return (
    <div className='contenedor-login'>
      <div className='info'>
        <h1 className='tituloL'>INICIO DE SESIÓN</h1>
        <div className='contenedor-texto-login'>
          <input
            className='input-login1'
            type='text'
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <div>
            <input
              className='input-login2'
              type='password'
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <h5>No tienes cuenta? <Link to="/registrarse">Registrate</Link></h5>
        </div>
        <button type="button" className="boton" onClick={handleLogin}>
          <p className="boton-texto">&nbsp;INICIAR SESION</p>
        </button>
      </div>
    </div>
  );
}
