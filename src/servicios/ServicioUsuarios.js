import axios from 'axios';

/**
 * Metodo para recuperar usuarios de un servicio
 * @author Thelma Romero
 * @version 1.0 - 11/02/2021
 * @returns promesa con arreglo de usuarios recuperados
 */
export async function recuperarUsuarios() {

    return new Promise((resolve, reject) => {

        axios.get('https://reqres.in/api/users')
            .then((respuesta) => {
                console.log(respuesta.data.data);
                const dataUsuarios = respuesta.data.data;
                resolve(dataUsuarios);
            })
            .catch((error) => {
                // handle error
                console.error(error);
                const mensajeError = "Ocurrio un error inesperado"
                reject(mensajeError);
            })



    })

}