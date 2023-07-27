import axios from 'axios';

const BASE_URL = 'https://swapi.py4e.com/api';
const IMAGES_GUIDE_URL = 'https://starwars-visualguide.com/assets/img';
const IMAGES_PEOPLE_URL = 'https://swapi.dev/api/people/';


// List Ships
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

// Detail Ship
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


// Pilots
export const obtenerListadoPilotos = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/people/?page=${page}`);
    const pilots = response.data.results.map((pilot) => ({
      ...pilot,
      id: pilot.url.split('/').filter(Boolean).pop(),
    }));
    return pilots;
  } catch (error) {
    console.error('Error getting pilot lists:', error);
    throw error;
  }
}

// Films
export const obtenerListadoPeliculas = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/films/?page=${page}`);
    const films = response.data.results.map((film) => ({
      ...film,
      id: film.url.split('/').filter(Boolean).pop(),
    }));
    return films;
  } catch (error) {
    console.error('Error getting film lists:', error);
    throw error;
  }
}


export const obtenerImagenNave = (starshipId) => {
  return `${IMAGES_GUIDE_URL}/starships/${starshipId}.jpg`
}


export function getCharacterImage(id) {
  return `${IMAGES_GUIDE_URL}/characters/${id}.jpg`; 
}


export function getFilmImage(id) {
  return `${IMAGES_GUIDE_URL}/films/${id}.jpg`;
}