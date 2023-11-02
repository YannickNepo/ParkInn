import React, { useState } from "react";
import './PublicaEstacionamiento.css';
import logo from '../../assets/proyecto.png';
import { useNavigate } from 'react-router-dom';

export default function PublicaEstacionamiento() {
  const history = useNavigate();
  const redirectToMenuInicio = () => {
    history('/MenuInicio');
  }

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
      setIsTextVisible(false); // Oculta el texto después de seleccionar la imagen
    }
    reader.readAsDataURL(file);
  }

  const handleFormSubmit = async () => {
    // ... (código para enviar la imagen al servidor)
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
          <label className='Dire'>Seleccione su dirección</label>
          <input className='input-Direccion' type='text' placeholder="" />
          <label className='Capacidad'>Capacidad del estacionamiento</label>
          <input className='input-Capacidad' type='number' placeholder="" />
          <label className='Contacto'>Número de contacto</label>
          <input className='input-Contacto' type='tel' placeholder="" />
          <div>
            <label className='Tipo'>Tipo del estacionamiento</label>
            <input className='input-Tipo' type='text' placeholder="Por ejemplo: Techado" />
            <label className='Fecha'>Fechas</label>
            <input className='input-Fecha' type='date' placeholder="" />
          </div>
          <div>
            <input
              className='input-Foto'
              type='file'
              accept="image/*"
              onChange={handleFileChange}
            />
            {isTextVisible && !previewImage && (
              <p>Por favor, elige una imagen</p>
            )}
            {previewImage && (
              <img
                className="preview-image"
                src={previewImage}
                alt="Preview"
                style={{ maxWidth: '100%', maxHeight: '400px' }} // Ajusta el tamaño de la imagen para adaptarlo a la pantalla
              />
            )}
          </div>
          <button type="button" className="botonPublicar" onClick={handleFormSubmit}>
            <p className="boton-texto">&nbsp;Publicar</p>
          </button>
        </div>
      </div>
    </div>
  );
}
