
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


  movieListToCreate: MovieList = new MovieList();
  movieListToDelete: any = {};
  responseMessage: string;

  userLists: Observable<Set<MovieList>>;
  selectedList: string;
  user: any = {};
  output: String;
  listToDelete: MovieList;
  constructor( private movieListService: MovieListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedList = "";
    this.user = JSON.parse(localStorage.getItem('activeUser'));
    this.movieListService.loadUserLists(JSON.parse(localStorage.getItem('activeUser')).id).subscribe(lists => (this.user.movieLists = lists));
    this.movieListToCreate.name = "";
    this.loadUserLists();
  }


  loadUserLists(): void {
    this.userLists = this.movieListService.loadUserLists(this.user.id);
  }

  deleteList(id: number): void{
    this.user.movieLists.forEach(item => {if(item.id==id){this.listToDelete = item}});
    this.movieListService.deleteListFromUser(id).subscribe(res => (
      this.responseMessage="Deleted List!",
      this.user = JSON.parse(localStorage.getItem('activeUser')),
      this.user.movieLists.pop(this.listToDelete),
      localStorage.setItem('activeUser', JSON.stringify(this.user)),
        this.loadUserLists()
    ));
  }

  create(): void {
    this.movieListToCreate.ownerID = this.user.id;
    this.movieListService.createMovieList(this.movieListToCreate).subscribe(res => (
      this.movieListToCreate = res,
        this.user.movieLists.push(this.movieListToCreate),
        localStorage.setItem('activeUser',
          JSON.stringify(this.user)),
        console.log(JSON.parse(localStorage.getItem('activeUser')).movieLists),
        this.loadUserLists()
    ));
  }

}
