import React from 'react';

import '../estilos/Generales.css';
import logo from '../recursos/imagenes/logo.svg';

function ComponenteEncabezado(props) {
    return (
        <div className="Contenedor-Principal">
            <header className="Contenedor-Encabezado-Principal">
                <img className="App-logo" src={logo} alt="Logo" />
                <h1>USUARIOS</h1>
            </header>
        </div>
    );
}

export default ComponenteEncabezado;