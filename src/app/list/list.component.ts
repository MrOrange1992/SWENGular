
import {Component, OnInit} from "@angular/core";
import {MovieList} from "../entities/movie-list";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute} from "@angular/router";
import {MovieListService} from "../movie/movie-list-service/movie-list-service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [MovieListService],
})
export class ListComponent implements OnInit {

  userLists: Observable<Set<MovieList>>;
  selectedList: string;
  user: any = {};
  output: String;
  listToDelete: MovieList;
  constructor( private movieListService: MovieListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedList = "";
    this.user = JSON.parse(localStorage.getItem('activeUser'));


    this.loadUserLists();
  }


  loadUserLists(): void {
    this.userLists = this.movieListService.loadUserLists(this.user.id);
  }

  deleteList(id: number): void{
    this.movieListService.getMovieListByID(id).subscribe(list => this.listToDelete = list);
    this.movieListService.deleteListFromUser(id).subscribe(output => this.output = output);
    this.loadUserLists();
    this.user = JSON.parse(localStorage.getItem('activeUser'));
    this.user.movieLists.pop(this.listToDelete);
    localStorage.setItem('activeUser', JSON.stringify(this.user));
  }

}
