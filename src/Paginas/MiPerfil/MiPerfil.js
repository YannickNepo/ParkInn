import React from 'react';
import './MiPerfil.css';


export default function MiPerfil(){
  

  return(
    <div className='contenedor-login'>
      <div className='info'>
        <h1 className='tituloR'>Crear cuenta
        </h1>
        <div className='contenedor-texto-Registrarse'>
            <input className='input-login1' type='text' placeholder="Nombre de usuario"></input>
          <input className='input-login2' type='mail' placeholder="Email"></input>
          <div>
            <input className='input-login3' type='password' placeholder="Contraseña"></input> 
          </div> 
        </div>
       </div>
     </div>
   );
}
  