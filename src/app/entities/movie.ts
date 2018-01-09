import {Genre} from './genre';

export interface Movie {
  id: number;
  title: string;
  genres: Set<Genre>;
  posterPath: string;
  homepage: string;
  userRating: number;
  overview: string;
  cast: string;
}
