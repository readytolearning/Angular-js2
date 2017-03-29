import { Component, OnInit } from '@angular/core';
import {MyExServiceService} from '../my-ex-service.service';


@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
todos;
name;
  constructor(private _exService : MyExServiceService) {}

  ngOnInit() {
 this.todos = this._exService.getData();
  }
  addMyName(){
    this.todos.push(this.name);
  }

  displayMessage(message){
    alert(message);
  }

}
