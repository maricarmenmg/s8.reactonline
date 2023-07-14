import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';
const IMAGES_GUIDE_URL = 'https://starwars-visualguide.com/assets/img';

export const obtenerListadoNaves = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/starships/?page=${page}`);
    const starships = response.data.results.map((starship) => ({
      ...starship,
      id: starship.url.split('/').filter(Boolean).pop(),
    }));
    return starships;
  } catch (error) {
    console.error('Error getting ship lists:', error);
    throw error;
  }
};

export const obtenerDetalleNave = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/starships/${id}/`);
    const starship = response.data;
    return starship;
  } catch (error) {
    console.error(`Error getting ship details with ID ${id}:`, error);
    throw error;
  }
};

export const obtenerImagenNave = (starshipId) => {
  return `${IMAGES_GUIDE_URL}/starships/${starshipId}.jpg`
}