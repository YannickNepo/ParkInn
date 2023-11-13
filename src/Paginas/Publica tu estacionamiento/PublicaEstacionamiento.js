import React from "react";
import './PublicaEstacionamiento.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';

export default function PublicaEstacionamiento() {
  const history = useNavigate();

  const redirectToMenuInicio = () => {
    history('/MenuInicio');
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const direccion = document.querySelector('.input-Direccion').value;
    const capacidad = document.querySelector('.input-Capacidad').value;
    const contacto = document.querySelector('.input-Contacto').value;
    const tipo = document.querySelector('.input-Tipo').value;
    const fechaDesde = document.querySelector('.input-Fecha1').value;
    const fechaHasta = document.querySelector('.input-Fecha2').value;

    const formData = {
      direccion,
      capacidad,
      contacto,
      tipo,
      fechaDesde,
      fechaHasta,
    };

    try {
      const response = await fetch('https://fair-teal-clownfish.cyclic.app/CreateParking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // El envío fue exitoso, redirige a la página deseada.
        console.log('Datos enviados exitosamente');
        history('/MenuInicio');
      } else {
        console.error('Error al enviar los datos al servidor');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud fetch:', error);
    }
  }

  return (
    <div className='contenedor-PE'>
      <div className="LogoPE">
        <button type="button" className="btn_logo" onClick={redirectToMenuInicio}>
          <img src={logo} alt="Botonlogo" />
        </button>
      </div>
      <div className='info'>
        <div className='contenedor-texto-PE'>
          <form onSubmit={handleFormSubmit}>
            <label className='Dire'>Seleccione su dirección</label>
            <input className='input-Direccion' type='text' placeholder="" />
            <label className='Capacidad'>Capacidad del estacionamiento</label>
            <input className='input-Capacidad' type='number' placeholder="" />
            <label className='Contacto'>Mail de contacto</label>
            <input className='input-Contacto' type='text' placeholder="" />
            <div>
              <label className='Tipo'>Tipo del estacionamiento</label>
              <input className='input-Tipo' type='text' placeholder="Por ejemplo: Techado" />
              <label className='Fecha1'>Desde</label>
              <input className='input-Fecha1' type='date' placeholder="" />
              <label className='Fecha2'>Hasta</label>
              <input className='input-Fecha2' type='date' placeholder="" />
            </div>
              <button type="submit" className="botonPublicar">
                <p className="boton-texto">&nbsp;Publicar</p>
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}
