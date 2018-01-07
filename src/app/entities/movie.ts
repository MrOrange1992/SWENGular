import {Genre} from './genre';
import {CollectionChangeRecord} from "@angular/core";

export interface Movie {
  id: number;
  title: string;
  genres: Set<Genre>;
  posterPath: string;
  homepage: string;
  rating: number;
  overview: string;
  // cast: string;
}
