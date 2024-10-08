import { Container, Card } from '@/shared/components';
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
    <Container>
      {movies.map((movies) => {
        const { id, title, tagline } = movies;
        return <Card key={id} title={title} description={tagline} />;
      })}
    </Container>
  );
};

export default Movies;
