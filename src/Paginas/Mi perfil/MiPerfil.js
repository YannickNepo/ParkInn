import React from "react";
import './MiPerfil.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';

export default function MiPerfil(){
    const history = useNavigate();
    const redirectToMenuInicio = () => {
      history('/MenuInicio');
    }

    return(
        <div className='contenedor-MP'>
          <div className="LogoPE" >
          <button type="button" className="btn_logo" onClick={redirectToMenuInicio}>
          <img src={logo} alt="Botonlogo" />
          </button>
          </div>
          </div>
    );
}     