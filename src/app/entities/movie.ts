import {Genre} from './genre';

export interface Movie {
  id: number;
  title: string;
  genres: Set<Genre>;
  posterPath: string;
  homepage: string;
  rating: number;
  cast: string;
}
