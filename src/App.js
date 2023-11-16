import React, { createContext, useState, useContext } from 'react';
import './App.css';
import PaginaInicio from './Paginas/Home/PaginaInicio' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Paginas/Login/Login'
import Registrarse from './Paginas/Registrarse/Registrarse'
import MenuInicio from './Paginas/MenuInicio/MenuInicio'
import PublicaEstacionamiento from './Paginas/Publica tu estacionamiento/PublicaEstacionamiento';
import MiPerfil from './Paginas/Mi perfil/MiPerfil';
import BuscaEstacionamiento from './Paginas/Busca tu estacionamiento/BuscaTuEst';
import ResultadosBusqueda from './Paginas/Busca tu estacionamiento/ResultadosBusqueda';

const UserContext = createContext();
const NameDataContext = createContext();


function App() {

  const [userID, setUserID] = useState(null); // Estado para almacenar el ID del usuario
  const [name, setName] = useState(null)
  const updateUserID = (newID) => {
    setUserID(newID);
  };
  const updateUserName = (name) => {
    setName(name);
  };
  return (
    <UserContext.Provider value={{ userID, updateUserID }}>
    <NameDataContext.Provider value={{ name, updateUserName }}>
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menuInicio" element={<MenuInicio />} />
        <Route path="/publicaestacionamiento" element={<PublicaEstacionamiento />} />
        <Route path="/miperfil" element={<MiPerfil />} />
        <Route path="/buscaestacionamiento" element={<BuscaEstacionamiento />} />
        <Route path="/resultadobusqueda" element={<ResultadosBusqueda />} />
      </Routes>
    </Router> 
    </NameDataContext.Provider>
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(UserContext);
};

export const useNameContext = () => {
  return useContext(NameDataContext);
};

export default App;
