import { Component, OnInit } from '@angular/core';
import {User} from '../entities/user';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user-service/user-service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  providers: [UserService],

})
export class UserSearchComponent implements OnInit {

  userList: Observable<User[]>;

  userName: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  search(): void {
    this.userList = this.userService.load(this.userName);
  }


}
