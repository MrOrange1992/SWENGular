import {MovieList} from './movie-list';
import {Genre} from './genre';

export interface User {
  id: number;
  username: string;
  password: string;
  genreIDs: string;
  movieLists: Set<MovieList>;
  usersFollowing: Set<User>;
  favouriteActorIDs: Set<number>;
}
