import {Component, OnInit} from "@angular/core";
import {AddListService} from "./add-list.service/add-list-service";
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  providers: [AddListService]
})
export class AddListComponent implements OnInit {

  message: String;

  owner: number = 0; //TODO: actual UserID
  listName: string;

  constructor(private addListService: AddListService) { }

  ngOnInit() { }

  create(): void {
    this.addListService.create(this.listName)
    this.message = "hmmmm";
  }
}
