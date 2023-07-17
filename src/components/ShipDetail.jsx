import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerDetalleNave, obtenerImagenNave } from '../services/Api';
import Pilots from './Pilots';
import Films from './Films';

import noImage from '../assets/images/no_image.png';
import LoadingSpinner from './elements/spinner';


const ShipDetail = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [pilots, setPilots] = useState(null);
  const [films, setFilms] = useState(null);
  const [imgSrc, setImgSrc] = useState('');

  const handleImageError = (event) => {
    event.target.src = noImage;
  };

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const starshipData = await obtenerDetalleNave(id);
        setStarship(starshipData);
        const imageUrl = obtenerImagenNave(id);
        setImgSrc(imageUrl);
      } catch (error) {
        console.error('Error obtaining starship details:', error);
        setImgSrc(noImage);
      }
    };

    fetchStarship();
  }, [id]);

  useEffect(() => {
    const fetchPilots = async () => {
      if (starship && starship.pilots.length > 0) {
        const promises = starship.pilots.map(async (pilotUrl) => {
          try {
            const response = await fetch(pilotUrl);
            const pilotData = await response.json();
            return pilotData;
          } catch (error) {
            console.error(`Error obtaining pilot data for URL ${pilotUrl}:`, error);
            return null;
          }
        });

        const pilotResults = await Promise.all(promises);
        setPilots(pilotResults.filter((pilot) => pilot !== null));
      }
    };

    fetchPilots();
  }, [starship]);

  useEffect(() => {
    const fetchFilms = async () => {
      if (starship && starship.films.length > 0) {
        const promises = starship.films.map(async (filmUrl) => {
          try {
            const response = await fetch(filmUrl);
            const filmData = await response.json();
            return filmData;
          } catch (error) {
            console.error(`Error obtaining film data for URL ${filmUrl}:`, error);
            return null;
          }
        });

        const filmResults = await Promise.all(promises);
        setFilms(filmResults.filter((film) => film !== null));
      }
    };

    fetchFilms();
  }, [starship]);

  if (!starship) {
    return  <div className="flex justify-center items-center h-screen">
     <LoadingSpinner />
     </div>; // Show loading message while data is being fetched
  }

  const { name, model } = starship;

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto pt-6 sm:px-6 p-4 ">
        <div className="max-w-6xl mx-auto text-center md:pb-8">
          <div className="flex justify-center items-center pt-24 rounded-lg">
            <img src={imgSrc} alt={starship.id} loading="lazy" onError={handleImageError} />
          </div>
          <div className="py-8 md:py-8">
            <h3 className="h3 font-prompt font-normal pt-8">{name}</h3>
            <p className="text-2xl font-prompt font-normal pt-2">Modelo: {model}</p>
          </div>

          {/* Pilots */}
          <div className="grid grid-cols-1 gap-4 py-12 lg:grid-cols-1 lg:gap-8">
            <h3 className="h3 font-prompt font-normal pt-8">Pilots</h3>
          </div>
          <Pilots pilots={pilots} />

          {/* Films */}
          <div className="grid grid-cols-1 gap-4 py-12 lg:grid-cols-1 lg:gap-8">
            <h3 className="h3 font-prompt font-normal pt-8">Films</h3>
          </div>
          <Films films={films} />
        </div>
      </div>
    </section>
  );
};

export default ShipDetail;
