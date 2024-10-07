'use client';

interface Props {
  name: string;
  address: string;
}

const Card: React.FC<Props> = ({ name, address }) => {
  const handleShowMore = () => {
    alert('Here could be information about the movie.');
  };

  return (
    <div className="border rounded-md p-2 flex flex-col">
      <div className="text-blue-400 font-bold">{name}</div>
      <div>{address}</div>
      <button onClick={handleShowMore}>Show more</button>
    </div>
  );
};

export default Card;
