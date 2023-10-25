import React from 'react' ;
import './App.css';
import PaginaInicio from './Paginas/Home/PaginaInicio' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Paginas/Login/Login'
import Registrarse from './Paginas/Registrarse/Registrarse'
import MenuInicio from './Paginas/MenuInicio/MenuInicio'
import PublicaEstacionamiento from './Paginas/Publica tu estacionamiento/PublicaEstacionamiento';
import MiPerfil from './Paginas/Mi perfil/MiPerfil';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menuInicio" element={<MenuInicio />} />
        <Route path="/publicaestacionamiento" element={<PublicaEstacionamiento />} />
        <Route path="/miperfil" element={<MiPerfil />} />
      </Routes>
    </Router> 
  );
}

export default App;
