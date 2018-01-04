import {MovieList} from './movie-list';
import {Genre} from './genre';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  genres: Set<Genre>;
  movieLists: Set<MovieList>;
}
