import { Component } from '@angular/core';
import {TodosComponent} from './todos/todos.component';
import {FooterComponent} from './footer/footer.component';
import {MyExServiceService} from './my-ex-service.service';


@Component({
  moduleId: module.id,
  selector: 'angular-ex-app',
  templateUrl: 'angular-ex.component.html',
  styleUrls: ['angular-ex.component.css'],
  directives:[TodosComponent,FooterComponent],
  providers : [MyExServiceService]
})
/*@View({
template : '<h1>I am from INDIA</h1>'

})*/
export class AngularExAppComponent {
  title = 'Welcome Application';

  displayMes(){
  alert("Hello world");

  }
}
