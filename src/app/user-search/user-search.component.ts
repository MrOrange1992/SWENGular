import { Component, OnInit } from '@angular/core';
import {User} from '../entities/user';
import {UserService} from './user-service/user-service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  providers: [UserService],

})
export class UserSearchComponent implements OnInit {

  userName: string;

  userList: Array<User> = [];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  search(): void {
    this.userService
      .load(this.userName)
      .subscribe(
        (userList) => { this.userList = userList; },
        (errResp) => { console.error('Error loading flights', errResp); }
        );
  }


}
