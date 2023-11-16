import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUserContext, useNameContext } from '../../App';

export default function LoginPage() {
  const { updateUserID } = useUserContext();
  const  { updateUserName } = useNameContext();
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Validar que el nombre de usuario y la contraseña no estén vacíos
    if (!username || !password) {
      alert('Por favor, introduce nombre de usuario y contraseña.');
      return;
    }

    // Objeto con los datos a enviar
    // Realizar la solicitud fetch
    const busqueda = await fetch('https://fair-teal-clownfish.cyclic.app/loginValidation', {
      method: 'POST',
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "password": password 
      })
    })
    .then(response => response.json())
  .then(response => {
    if (!response.msg) {
      alert("Usuario encontrado");
      // Guardar los datos del usuario en localStorage
      updateUserID(response.ID);
      updateUserName(response.username)

      // localStorage.setItem('IDUsuario', response.ID);
      // localStorage.setItem('userProfile', JSON.stringify(response)); // Almacena los datos del usuario
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
            // Manejar la respuesta del servidor

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
