import { Container } from '@/shared/components';
import Card from '@/shared/components/Card';
import { handleResponse } from '@/shared/helpers';
import { Cinema } from '@/shared/types';

async function getData() {
  const response = await fetch('https://api.cineamo.com/cinemas');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

const Cinemas: React.FC = async () => {
  const data = await getData();
  const cinemas: Array<Cinema> = handleResponse(data);

  return (
    <Container>
      {cinemas.map((cinema) => {
        const { id, name, address } = cinema;
        return <Card key={id} title={name} description={address} />;
      })}
    </Container>
  );
};

export default Cinemas;
