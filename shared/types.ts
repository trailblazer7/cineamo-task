export type Cinema = {
  id: number;
  name: string;
  address: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
};

export type Movie = {
  id: number;
  title: string;
  tagline: string;
  image?: string;
};

export type Response<T> = {
  _embedded: {
    cinemas?: T[];
    movies?: T[];
  };
};
