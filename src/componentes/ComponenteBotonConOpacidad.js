import React, { useState } from 'react';
import '../estilos/ComponenteBotonConOpacidad.css';

function ComponenteBotonConOpacidad(props) {

    const [touched, setTouched] = useState(false);
    const className = touched ? 'btn touched' : 'btn';

    const toggleTouched = () => {
        setTouched(!touched)
    }

    const handleMouseUp = () => {  
        setTimeout(() => {
            setTouched(false)
        }, 150);
    }

    return (
        <button
            className={className}
            onMouseDown={toggleTouched}
            onMouseUp={handleMouseUp}
            onClick={props.accionBoton}
        >
            {props.children}
        </button>
    );

}

export default ComponenteBotonConOpacidad;