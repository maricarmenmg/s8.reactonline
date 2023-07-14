import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerDetalleNave, obtenerImagenNave } from '../services/Api';

import noImage from '../assets/images/no_image.png';

const ShipDetail = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
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
        console.error('Error al obtener los detalles de la nave:', error);
        setImgSrc(noImage);
      }
    };
  
    fetchStarship();
  }, [id]);

  if (!starship) {
    return null; // Opcional: Mostrar un mensaje de carga o dejar en blanco mientras se obtienen los detalles de la nave
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto pt-40 sm:px-6 p-4 ">
        <div className="max-w-6xl mx-auto text-center md:pb-8">
          <div className="flex justify-center items-center pt-24 rounded-lg">
<img src={imgSrc} alt={starship.id} loading="lazy"  onError={handleImageError} />
      
            
          </div>
          <div className="py-8 md:py-8">
            <h2 className="h2 font-prompt font-normal pt-8">{starship.name}</h2>
            <p className="text-2xl font-prompt font-normal pt-2">Modelo: {starship.model}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipDetail;
