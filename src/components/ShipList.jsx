import  { useState, useEffect } from 'react';
import  { obtenerListadoNaves } from '../services/api';
import IconStarships from '../assets/icons/icon_starships.svg';

const ShipList = () => {

  const [naves, setNaves] = useState([]);

  useEffect(() => {
    const fetchNaves = async () => {
      try {
        // Obtiene el listado de naves desde la API
        const listadoNaves = await obtenerListadoNaves();

        // Actualiza el estado con los datos de las naves
        setNaves(listadoNaves);
      } catch (error) {
        console.error('Error al obtener el listado de naves:', error);
      }
    };

    // Llama a la función para obtener el listado de naves
    fetchNaves();
  }, []);

  return (

<section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 p-20 ">
          <div className="max-w-6xl mx-auto text-center  md:pb-10">
        <div className="py-12 md:py-22">
            <h2  className="h2 font-prompt font-normal pt-20">Naves Estelares</h2>
            <img className="inline py-5" src={IconStarships}  width="124" height="119" alt="Hero Images" />
          </div>

          <div className="grid grid-cols-3 gap-10 ">
              {naves.map(nave => (
              <div className="font-semibold " key={nave.name}>
              <img className="inline" src={IconStarships}  width="50" height="50" alt="Hero Images" />
                <h4 className="h4 font-prompt">{nave.name}</h4>
                <p className="font-prompt ">Modelo: {nave.model}</p>
             </div>
           ))}
          </div>
          </div>
</div>
</section>


  );
}
export default ShipList;
