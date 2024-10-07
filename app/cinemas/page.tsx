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
    <div className="grid grid-cols-4 max-w-[1000px] mx-auto gap-2 mt-10">
      {cinemas.map((cinema) => {
        const { id, name, address } = cinema;
        return <Card key={id} name={name} address={address} />;
      })}
    </div>
  );
};

export default Cinemas;
