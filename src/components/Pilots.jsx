
const Pilots = ({ pilots }) => {
  if (!pilots || pilots.length === 0) {
    return <div>No pilots found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
      {pilots.map((pilot) => (
        <div className="h-auto rounded-lg p-6 text-white text-left bg-gray-800" key={pilot?.name}>
          <div className="text-lg mt-6 font-bold text-project-100">{pilot?.name}</div>
          <div>Height: {pilot?.height} cm</div>
          <div>Mass: {pilot?.mass} kg</div>
          <div>Hair: {pilot?.hair_color}</div>
          <div>Skin: {pilot?.skin_color}</div>
          <div>Eyes: {pilot?.eye_color}</div>
          <div>BirthDate: {pilot?.birth_year}</div>
          <div>Gender: {pilot?.gender}</div>
        </div>
      ))}
    </div>
  );
};

export default Pilots;

