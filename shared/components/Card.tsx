'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';

interface Props {
  title: string;
  description: string;
}

const MovieCard: React.FC<Props> = ({ title, description }) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleShowMore = () => {
    alert('Here could be information about the movie.');
  };

  const onFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="relative border rounded-md p-2 flex flex-col min-h-80">
      <div className="text-blue-400 font-bold pr-10">{title}</div>
      <div>{description}</div>
      <Button text="Show more" onClickHandler={handleShowMore} />
      {favorite ? (
        <Heart
          className="absolute top-2 right-2 hover:cursor-pointer fill-blue-500 stroke-blue-500"
          onClick={onFavoriteClick}
        />
      ) : (
        <Heart
          className="absolute top-2 right-2 hover:cursor-pointer"
          onClick={onFavoriteClick}
        />
      )}
    </div>
  );
};

export default MovieCard;
