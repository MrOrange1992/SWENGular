import {Component, OnInit} from "@angular/core";
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html'
})
export class AddListComponent implements OnInit {

  message: string;

  userId: number;
  listName: string;

  constructor() { }

  ngOnInit() { }

  create(): void {
    this.message = this.listName;
  }
}
