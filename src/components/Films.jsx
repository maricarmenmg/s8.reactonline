import { getFilmImage } from '../services/Api';
import noImage from '../assets/images/no_image.png';

const Films = ({ films }) => {
  if (!films || films.length === 0) {
    return <div>No movies found</div>;
  }

  const handleImageError = (event) => {
    event.target.src = noImage;
  };


  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
      {films.map((film) => (
        <div className="h-auto rounded-lg p-6 text-white text-left bg-gray-800" key={film?.title}>
        <div><img src={getFilmImage(film.id)}  onError={handleImageError}/></div>
          <div className="text-lg mt-6 font-bold text-project-100">{film?.title}</div>
          <div>Episode: {film?.episode_id}</div>
          <div>Director: {film?.director}</div>
          <div>Release Date: {film?.release_date}</div>
        </div>
      ))}
    </div>
  );
};

export default Films;
