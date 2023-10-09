import React from 'react';
import './MenuInicio.css';
import BtnBE from '../../assets/BuscaEst.PNG';
import BtnPE from '../../assets/PublicaEst.PNG';
import BtnMP from '../../assets/MiPerfil.PNG';
import { useNavigate } from 'react-router-dom';

export default function MenIni(){
  const history = useNavigate();
  const redirectToBuscaEstacionamiento = () => {
    history('/BuscaEstacionamiento');
  };
  const redirectToPublicaEstacionamiento = () => {
    history('/PublicaEstacionamiento');
  };
  const redirectToMiPerfil = () => {
    history('/MiPerfil');
  };
   


  return(
    <div className='MenI'>
      <div className="BuscaEstacionamiento" >
      <button type="button" className="btn_BE" onClick={redirectToBuscaEstacionamiento}>
      <img src={BtnBE} alt="BotonBuscaEstacionamiento" />
      </button>
      </div>
      <div className="PublicaEstacionamiento" >
      <button type="button" className="btn_PE" onClick={redirectToPublicaEstacionamiento}>
      <img src={BtnPE} alt="BotonPublicaEstacionamiento" />
      </button>
     </div>
     <div className="MiPerfil" >
     <button type="button" className="btn_MP" onClick={redirectToMiPerfil}>
     <img src={BtnMP} alt="BotonMiPerfil" />
      </button>
     </div>
    </div>
  );
}
