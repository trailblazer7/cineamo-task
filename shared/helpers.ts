import { Response } from './types';

export function handleResponse<T>(response: Response<T>): T[] {
  if (response._embedded.cinemas) {
    return response._embedded.cinemas;
  }
  if (response._embedded.movies) {
    return response._embedded.movies;
  }
  return [];
}
