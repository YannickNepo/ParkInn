import React from 'react';
import './PaginaInicio.css';
import logo from '../../assets/LOGO.png';
import Botones from '../../components/Botones';

function Logo() {
  return (
    <div className="Logo" >
      <img src={logo} alt="LogoPark" />
    </div>
  );
}

function Home(){
  return(
    <div className="Home">
      <Logo /> 
      <Botones />
    </div> 
  )
}

export default Home;



