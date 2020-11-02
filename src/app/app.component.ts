import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
 styleUrls: ['./app.component.css'],
})
export class AppComponent {
  player = 'Leonel Messi';
  name = '';
  teams = ['Newell\'s Old Boys', 'Barcelona Youth', 'Barcelona C', 'Barcelona B', 'Barcelona!'];

}
