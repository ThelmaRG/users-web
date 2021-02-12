import React from 'react';
import '../estilos/ComponenteTarjetaUsuario.css';

function ComponenteDetallesUsuario(props) {

    return (
        <div className="Contenedor-Vertical">

            <div className="Contenedor-Img-Grande">
                <img className="Imagen-Grande"
                    src={props.img}
                    alt={props.nombre} />
            </div>
            <div className="Contenedor-Texto-Grande">
                <p className="Nombre">{props.nombre + " " + props.apellido}</p>
                <p className="Nombre">{props.email}</p>
            </div>


        </div>


    );
}

export default ComponenteDetallesUsuario;