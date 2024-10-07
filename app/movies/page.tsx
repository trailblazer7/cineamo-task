import { handleResponse } from '@/shared/helpers';
import { Movie } from '@/shared/types';

async function getData() {
  const response = await fetch('https://api.cineamo.com/movies');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

const Movies: React.FC = async () => {
  const data = await getData();
  const movies: Array<Movie> = handleResponse(data);

  return (
    <div className="grid grid-cols-4 max-w-[1000px] mx-auto gap-2 mt-10">
      {movies.map((movies) => {
        const { id, title, tagline } = movies;
        return (
          <div key={id} className="border rounded-md p-2 flex flex-col">
            <div className="text-blue-400 font-bold">{title}</div>
            <div>{tagline}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
