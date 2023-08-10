import React from 'react';
import './MenuInicio.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/proyecto.png';

export default function MenIni(){
  const history = useNavigate();

  const redirectToAnotherRoute = () => {
    history('/BuscarEstacionamiento');

  return(
    <div className='Home'>
      <div className="Logo" >
      <img src={logo} alt="LogoPark" />
     </div>
    </div>
  );
}
}