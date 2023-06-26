import React from 'react';
import './PaginaInicio.css';
import logo from '../../assets/LOGO.png';
import { useNavigate } from 'react-router-dom';

function Home() {
  const history = useNavigate();
  const redirectToLogin = () => {
    history('/Login');
  };
  const redirectToRegister= () => {
    history('/Registrarse');
  };

  return (
   
    <div className='Home'>
      <div className="Logo" >
      <img src={logo} alt="LogoPark" />
     </div>
      <div className='BotonR-I'>
        <button type="button" className="btn_r" onClick={redirectToRegister}>
        Crear cuenta
        </button>
        <button type="button" className="btn_is" onClick={redirectToLogin}>
        Iniciar Sesion
        </button>
      </div>
    </div>
  );
}


  export default Home;



