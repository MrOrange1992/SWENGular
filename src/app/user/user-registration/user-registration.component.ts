import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user-service/user-service';
import {AlertService} from '../../services/alert.service';
import {User} from '../../entities/user';
import {Genre} from "../../entities/genre";
import {GenreService} from "../../genre/genre-service/genre-service";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  providers: [
    UserService,
    AlertService
  ]
})
export class UserRegistrationComponent {

  user: any = {};
  loading = false;

  message = '';
  name: string;
  genres: Genre[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private genreService: GenreService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.genreService
      .getAll()
      .subscribe(
        (genres) => {
          this.genres = genres.sort((n1, n2) => n1.name.charCodeAt(0) - n2.name.charCodeAt(0));
        },
        (errResp) => {
          console.error('Error loading genres', errResp);
        });
    this.user.genreIDs = [];
  }

  register() {
    this.loading = true;

    this.userService.create(this.user)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  onChange(id: number, isChecked: boolean): void {
    if (isChecked) { this.user.genreIDs.push(id); }
    else { this.user.genreIDs.delete(id); }

  }
}
