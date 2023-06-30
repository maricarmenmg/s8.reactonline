import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { obtenerListadoNaves } from '../services/Api';

import LoadingSpinner from './elements/spinner/Spinner';


const ShipList = () => {
  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const cargarMasNaves = async () => {
    const nextPage = currentPage + 1;
    try {
      const newStarships = await obtenerListadoNaves(nextPage);
      setStarships([...starships, ...newStarships]);
      setCurrentPage(nextPage);
    } catch (error) {
      // Manejo de errores
    }
  };
  

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

  if (!starships.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }
  
  
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 p-20">
        <div className="max-w-6xl mx-auto text-center md:pb-10">
          <div className="py-12 md:py-22">
            <h3 className="h3 font-prompt font-regular pt-20">Naves Estelares</h3>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {starships.map((starship) => (
              <div className="font-normal bg-gray-800 rounded-lg  py-5 px-5 text-left" key={starship.name}>
                <Link to={`/shipprofile/${encodeURIComponent(starship.id)}`}>
                   <h4 className="h4 font-prompt text-project-100">{starship.name}</h4>
                   <p  className="text-xl font-prompt">Modelo: {starship.model}</p>
                </Link>
                
              </div>
            ))}
           
          </div>
          <div className="max-w-5xl  mt-12">
          <button  className="w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-5 rounded border border-project-100 bg-project-100 px-3 py-2 text-sm font-prompt font-medium text-gray-900 transition hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75" 
          onClick={cargarMasNaves}>CARGAR MÁS NAVES
          </button>
  
         </div>
        </div>
      </div>
    </section>
  );
};

export default ShipList;