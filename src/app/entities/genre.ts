import {Movie} from './movie';

export interface Genre {
  id: number;
  name: string;
  movies: Set<Movie>;
}
