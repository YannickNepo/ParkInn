import React from 'react' ;
import './App.css';
import PaginaInicio from './Paginas/Home/PaginaInicio' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Paginas/Login/Login'
import Registrarse from './Paginas/Registrarse/Registrarse'
import MenuInicio from './Paginas/MenuInicio/MenuInicio'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menuInicio" element={<MenuInicio />} />
      </Routes>
    </Router> 
  );
}

export default App;
