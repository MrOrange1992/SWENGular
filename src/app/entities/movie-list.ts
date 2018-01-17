import {Movie} from './movie';
import {User} from './user';

export interface MovieList {
  id: number;
  name: string;
  ownerID: number;
  movieIDs: Set<number>;
  movies: Set<Movie>;
}
