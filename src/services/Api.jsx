// Importa la función 'axios' para realizar las solicitudes HTTP
import axios from 'axios';

// Define la URL base de la API
const baseURL = 'https://swapi.dev/api';

// Función para obtener el listado de naves
export const obtenerListadoNaves = async () => {
  try {
    // Realiza una solicitud GET a la API para obtener el listado de naves
    const response = await axios.get(`${baseURL}/starships/`);

    // Retorna los datos de las naves obtenidos de la respuesta
    return response.data.results;
  } catch (error) {
    // Maneja cualquier error que ocurra durante la solicitud
    console.error('Error al obtener el listado de naves:', error);
    throw error;
  }
};