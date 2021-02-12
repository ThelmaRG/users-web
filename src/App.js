
import React, { useEffect, useState } from 'react';
import ComponenteDetallesUsuario from './componentes/ComponenteDetallesUsuario';
import ComponenteEncabezado from './componentes/ComponenteEncabezado';
import ComponenteTarjetaUsuario from './componentes/ComponenteTarjetaUsuario';
import './estilos/Generales.css';
import { recuperarUsuarios } from './servicios/ServicioUsuarios';

function App() {

  const [arregloUsuarios, setArregloUsuarios] = useState([]);
  const [muestraDetallesUsuario, setMuestraDetallesUsuario] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});



  useEffect(() => {

    mostrarUsuarios();

  }, []);

  async function mostrarUsuarios() {
    await recuperarUsuarios().then(respuesta => {
      setArregloUsuarios(respuesta);
    }).catch(error => {
      console.log("ERROR AL RECUPERAR USUARIOS: " + error);

    });
  }

  function mostrarDetallesUsuario(usuario) {
    setUsuarioSeleccionado(usuario);
    setMuestraDetallesUsuario(true);
  }

  return (
    <div className="Contenedor-Principal">
      <header>
        <ComponenteEncabezado />
      </header>
      <body>
        <div className="Contenedor-Horizontal">
          <div className="Contenedor-Vertical">
            {
              arregloUsuarios.map((item, index) => (
                <ComponenteTarjetaUsuario
                  key={index}
                  nombre={item.first_name}
                  apellido={item.last_name}
                  img={item.avatar}
                  accionTarjeta={() => mostrarDetallesUsuario(item)}
                />
              ))
            }
          </div>
          <div className="Contenedor-Vertical">
            {muestraDetallesUsuario ?
              < ComponenteDetallesUsuario
                nombre={usuarioSeleccionado.first_name}
                apellido={usuarioSeleccionado.last_name}
                img={usuarioSeleccionado.avatar}
                email={usuarioSeleccionado.email}
                
              /> : null
            }
          </div>

        </div>
      </body>
    </div >
  );
}

export default App;
