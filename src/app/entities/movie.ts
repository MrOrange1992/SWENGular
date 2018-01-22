import {Genre} from './genre';
import {Actor} from './actor';

export interface Movie {
  id: number;
  title: string;
  genres: Set<Genre>;
  posterPath: string;
  homepage: string;
  voteAverage: number;
  overview: string;
  actors: Set<Actor>;
  trailer: string;
}
