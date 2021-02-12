import React from 'react';

import ComponenteBotonConOpacidad from './ComponenteBotonConOpacidad';

import '../estilos/ComponenteTarjetaUsuario.css';

function ComponenteTarjetaUsuario(props) {

    return (
        <ComponenteBotonConOpacidad
            accionBoton={props.accionTarjeta}
        >
            <div className="Contenedor-Tarjeta">

                <div className="Contenedor-Img">
                    <img className="Imagen"
                        src={props.img}
                        alt={props.nombre} />
                </div>
                <div className="Contenedor-Texto">
                    <p className="Nombre">{props.nombre + " " + props.apellido}</p>
                </div>


            </div>

        </ComponenteBotonConOpacidad>
    );
}

export default ComponenteTarjetaUsuario;