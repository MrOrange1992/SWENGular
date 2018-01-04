import {Movie} from './movie';
import {User} from './user';

export interface MovieList {
  id: number;

  name: string;
  owner: User;
  movieIDs: Set<number>;
  movies: Set<Movie>;
}
