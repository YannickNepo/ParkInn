import React, { useState, useEffect } from "react";
import './MiPerfil.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';
import { useNameContext, usePasswordContext, useUserContext } from '../../App';

export default function MiPerfil() {
  const history = useNavigate();
  const { name, updateUserName } = useNameContext(); 
  const { password, updatePassword } = usePasswordContext();
  const { userID, updateUserID } = useUserContext();
  const [estacionamientos, setEstacionamientos] = useState([]);

  const redirectToMenuInicio = () => {
    history('/MenuInicio');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fair-teal-clownfish.cyclic.app/GetParkUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userID: userID })
        });

        if (response.ok) {
          const data = await response.json();
          // Si recibes datos de estacionamientos, actualiza el estado
          if (data && data.length > 0) {
            setEstacionamientos(data);
          } else {
            // Si no hay estacionamientos, muestra un mensaje
            setEstacionamientos([]);
          }
        } else {
          // Manejar el caso de error de la solicitud
          console.error('Error al obtener los estacionamientos');
        }
      } catch (error) {
        console.error('Error al procesar la solicitud:', error);
      }
    };

    if (userID) {
      fetchData();
    }
  }, [userID]);

  const handleDelete = async (estacionamientoID) => {
    try {
      const response = await fetch('https://fair-teal-clownfish.cyclic.app/DeletePark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: estacionamientoID })
      });

      if (response.ok) {
        // Eliminar el estacionamiento de la lista localmente
        const updatedEstacionamientos = estacionamientos.filter(est => est.ID !== estacionamientoID);
        setEstacionamientos(updatedEstacionamientos);
        console.log(`Estacionamiento con ID ${estacionamientoID} eliminado exitosamente`);
      } else {
        console.error(`Error al intentar eliminar el estacionamiento con ID ${estacionamientoID}`);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <div className='contenedor-MP'>
      <div className="LogoPE">
        <button type="button" className="btn_logo" onClick={redirectToMenuInicio}>
          <img src={logo} alt="Botonlogo" />
        </button>
      </div>
      <div className='perfil'>
        <h2>Tu perfil</h2>
        <p><strong>Nombre de usuario:</strong> {name}</p>
        <p><strong>Contraseña:</strong> {password}</p>

        <h3>Estacionamientos:</h3>
        {estacionamientos.length > 0 ? (
          <ul>
            {estacionamientos.map((estacionamiento) => (
              <li key={estacionamiento.ID}>
                <p><strong>Dirección:</strong> {estacionamiento.adress}</p>
                <p><strong>Tipo:</strong> {estacionamiento.type}</p>
                <p><strong>Capacidad:</strong> {estacionamiento.capacity}</p>
                <p><strong>Contacto:</strong> {estacionamiento.contact}</p>
                <p><strong>Barrio:</strong> {estacionamiento.barrio}</p>
                <button className="delete" onClick={() => handleDelete(estacionamiento.ID)}>Borrar</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No has publicado ningún estacionamiento.</p>
        )}

        <button className="botonCerrar" onClick={() => {
          updatePassword(null);
          updateUserID(null);
          updateUserName(null);
          history('/');
        }}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
