import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerDetalleNave, obtenerImagenNave, obtenerImagenPiloto, obtenerListadoPeliculas } from '../services/Api';

import noImage from '../assets/images/no_image.png';

const ShipDetail = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [pilots, setPilots] = useState(null);
  const [films, setFilms] = useState(null);

  const [imgSrc, setImgSrc] = useState('');
  const handleImageError = (event) => {
    event.target.src = noImage;
  };
  
  // Ships

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


// Pilots

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

// Films

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
    return null; // Opcional: Mostrar un mensaje de carga o dejar en blanco mientras se obtienen los detalles de la nave
  }

  return (

    <section className="relative">
      <div className="max-w-6xl mx-auto pt-6 sm:px-6 p-4 ">
        <div className="max-w-6xl mx-auto text-center md:pb-8">
          <div className="flex justify-center items-center pt-24 rounded-lg">
             <img src={imgSrc} alt={starship.id} loading="lazy"  onError={handleImageError} />
          </div>
          <div className="py-8 md:py-8">
            <h3 className="h3 font-prompt font-normal pt-8">{starship.name}</h3>
            <p className="text-2xl font-prompt font-normal pt-2">Modelo: {starship.model}</p>
          </div>

       
         { /* Pilots */}
         <div className="grid grid-cols-1 gap-4 py-12 lg:grid-cols-1 lg:gap-8">
         <h3 className="h3 font-prompt font-normal pt-8">Pilots</h3>
         </div>
         <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            {pilots?.length === 0 ? (
              <div>No Pilots</div>
            ) : (
              pilots?.map((pilot) => (
                <div className="h-auto rounded-lg p-6 text-white text-left bg-gray-800" key={pilot?.name}>
                <div>
                <img src={obtenerImagenPiloto(pilot.id)} alt={pilot.name} onError={handleImageError} />
            </div>
                  <div className='text-lg mt-6 font-bold'>{pilot?.name}</div>
                  <div>Height: {pilot?.height} cm</div>
                  <div>Mass: {pilot?.mass} kg</div>
                  <div>Hair: {pilot?.hair_color}</div>
                  <div>Skin: {pilot?.skin_color}</div>
                  <div>Eyes: {pilot?.eye_color}</div>
                  <div>BirthDate: {pilot?.birth_year}</div>
                  <div>Gender: {pilot?.gender}</div>
                </div>
              ))
            )}
          </div>

          { /* Fillms */}
          <div className="grid grid-cols-1 gap-4 py-12 lg:grid-cols-1 lg:gap-8">
         <h3 className="h3 font-prompt font-normal pt-8">Films</h3>
         </div>
         <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            {films?.length === 0 ? (
              <div>No Films</div>
            ) : (
              films?.map((film) => (
                <div className="h-auto rounded-lg p-6 text-white text-left bg-gray-800" key={film?.title}>
                <div><img src={obtenerListadoPeliculas(film.id)} alt={film.title} onError={handleImageError} /></div>
                  <div className='text-lg mt-6 font-bold' >{film?.title}</div>
                  <div>Episode: {film?.episode_id}</div>
                  <div>Director: {film?.director}</div>
                  <div>Release Date: {film?.release_date}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipDetail;
