import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { obtenerListadoNaves } from '../services/Api';

import IconStarships from '../assets/icons/icon_starships.svg';

const ShipList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const starshipsData = await obtenerListadoNaves();
        setStarships(starshipsData);
      } catch (error) {
        console.error('Error al obtener el listado de naves:', error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 p-20">
        <div className="max-w-6xl mx-auto text-center md:pb-10">
          <div className="py-12 md:py-22">
            <h2 className="h2 font-prompt font-normal pt-20">Naves Estelares</h2>
            <img className="inline py-5" src={IconStarships} width="124" height="119" alt="Hero Images" />
          </div>

          <div className="grid grid-cols-3 gap-10">
            {starships.map((starship) => (
              <div className="font-semibold" key={starship.name}>
                <Link to={`/shipprofile/${encodeURIComponent(starship.id)}`}>
                   <h4 className="h4 font-prompt">{starship.name}</h4>
                   <p  className="font-prompt">Modelo: {starship.model}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipList;