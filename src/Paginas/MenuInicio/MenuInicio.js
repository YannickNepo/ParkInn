import React from 'react';
import './MenuInicio.css';
import BtnBE from '../../assets/BuscaEst.PNG';
import BtnPE from '../../assets/PublicaEst.PNG';
import BtnMP from '../../assets/MiPerfil.PNG';

export default function MenIni(){
  // const imagenBoton = document.getElementById('imagenBoton');
  // imagenBoton.addEventListener('click', function() {
  //   window.location.href = 'Login'; 
  // });


  return(
    <div className='MenI'>
      <div className="BuscaEstacionamiento" >
      <img src={BtnBE} alt="BotonBuscaEstacionamiento" id="imagenBoton" />
     </div>
     <div className="PublicaEstacionamiento" >
      <img src={BtnPE} alt="BotonPublicaEstacionamiento" />
     </div>
     <div className="MiPerfil" >
      <img src={BtnMP} alt="BotonMiPerfil" />
     </div>
    </div>
  );
}
