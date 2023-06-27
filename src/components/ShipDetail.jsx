import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerDetalleNave, obtenerImagenNave } from '../services/Api';

const ShipDetail = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const starshipData = await obtenerDetalleNave(id);
        setStarship(starshipData);
        const imageUrl = obtenerImagenNave(id);
        setImgSrc(imageUrl);
      } catch (error) {
        console.error('Error al obtener los detalles de la nave:', error);
      }
    };

    fetchStarship();
  }, [id]);

  if (!starship) {
    return null; // Opcional: Mostrar un mensaje de carga o dejar en blanco mientras se obtienen los detalles de la nave
  }
  console.log("starship not found");

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 p-20">
        <div className="max-w-6xl mx-auto text-center md:pb-10">
        <div className="py-12 md:py-22">
        <img className="py-12 md:py-22" src={imgSrc} alt={starship.id} />
        </div>
          <div className="py-12 md:py-22">
            <h2 className="h2 font-prompt font-normal pt-20">{starship.name}</h2>
            <p  className="text-2xl font-prompt font-normal pt-5">Modelo: {starship.model}</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipDetail;