import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user-service/user-service';
import {AlertService} from '../../services/alert.service';
import {User} from '../../entities/user';
import {Genre} from "../../entities/genre";
import {GenreService} from "../../genre/genre-service/genre-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  registerForm: FormGroup;

  validationMessages = {
    'username': {
      'required': 'You need to enter a username',
      'minlength': "Your username has to have at least 3 characters",
      'maxlength': "Your username must not be longer than 16 characters"
    },
    'password': {
      'required': 'You need to enter a password',
      'minlength': "Your password has to have at least 8 characters",
      'maxlength': "Your password must not be longer than 128 characters"
    }
  };

  formErrors = {
    'username':'',
    'password':'',
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private genreService: GenreService,
    private alertService: AlertService,
    private fb: FormBuilder,
  ) { }

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
    this.buildForm();
    this.user.genreIDs = [];
    this.registerForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      'username': [this.user.username,[Validators.required,Validators.maxLength(16),Validators.minLength(3)]],
      'password': [this.user.password,[Validators.required,Validators.minLength(8),Validators.maxLength(128)]]
    });
  }

  onValueChanged(data?: any){
    if (!this.registerForm) return;
    const form = this.registerForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
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
    else { this.user.genreIDs.pop(id); }

  }
}
